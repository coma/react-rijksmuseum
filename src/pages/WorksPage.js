import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'qs';
import { fromQueryStringify } from '../util/fromQuery';
import Page from '../ui/Page';
import BreadCrumbs from '../ui/BreadCrumbs';
import Search from '../ui/Search';
import Pages from '../ui/Pages';
import Table from '../ui/Table';
import { search } from '../store/worksActions';
import { SORTER } from '../store/worksQueryParse';
import { BreadCrumbsAndSearch, TableTitle, SearchPages } from './WorksPageStyle';

class WorksPage extends Component {
  constructor (props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch (searchTerm) {
    this.props.search(searchTerm);
  }

  render () {
    const { breadCrumbs, searchTerm, title, headers, results, page, pages, sortBy } = this.props;

    return (
      <Page title="Obras de Arte">
        <BreadCrumbsAndSearch>
          <BreadCrumbs links={breadCrumbs} />
          <Search
            key={searchTerm}
            text={searchTerm}
            onSearch={this.onSearch}
          />
        </BreadCrumbsAndSearch>
        <TableTitle>{title}</TableTitle>
        <Table
          headers={headers}
          data={results}
          link={({ id }) => `/works/${id}?${fromQueryStringify(breadCrumbs[1].url)}`}
        />
        { pages > 1 && (
          <SearchPages>
            <Pages
              current={page}
              total={pages}
              link={page => `/works?${qs.stringify({ page, sortBy, searchTerm })}`}
            />
          </SearchPages>
        )}
      </Page>
    );
  }
}

function mapState ({ works, work }, { location }) {
  const title = 'Table title';
  const { ids = [], page, pages, sortBy, searchTerm } = works;
  const link = sortBy => `/works?${qs.stringify({ sortBy, searchTerm })}`;

  const results = ids.map(id => ({
    id,
    title: work[id].title,
    author: work[id].author,
    year: work[id].year,
    type: work[id].types.join(', '),
    mattech: work[id].mattech,
  }));

  const breadCrumbs = [
    { url: '/', text: 'Museo' },
    { url: `${location.pathname}${location.search}`, text: 'Obras de arte' },
  ];

  const headers = [
    { name: 'title', text: 'Obra', ...SORTER.title(link, sortBy) },
    { name: 'author', text: 'Artista', ...SORTER.artist(link, sortBy) },
    { name: 'year', text: 'Año', ...SORTER.date(link, sortBy) },
    { name: 'type', text: 'Tipo', ...SORTER.type(link, sortBy) },
    { name: 'mattech', text: 'Material/Técnica' },
  ];

  return { title, headers, results, breadCrumbs, page, pages, sortBy, searchTerm };
}

const actions = { search };

export default connect(mapState, actions)(WorksPage);
