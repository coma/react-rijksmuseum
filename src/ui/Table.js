import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Sort from './Sort';
import { Wrapper, Head, Body } from './TableStyle';

function renderHeader({ name, text, isAsc, isDesc, sort }) {
  if (!sort) {
    return (
      <th key={name}>{text}</th>
    );
  }

  return (
    <th key={name}>
      <Sort
        to={sort}
        isAsc={isAsc}
        isDesc={isDesc}
      >{text}</Sort>
    </th>
  );
}

function onDoubleClick(row, index, link, history) {
  return () => {
    if (link) {
      history.push(link(row, index));
    }
  };
}

function Table({ headers, data, keyFrom, link, history }) {
  return (
    <Wrapper>
      <Head>
        <tr>
          { headers.map(renderHeader) }
        </tr>
      </Head>
      <Body>
        {
          data.map((row, index) => (
            <tr
              key={keyFrom ? row[keyFrom] : index}
              onDoubleClick={onDoubleClick(row, index, link, history)}
            >
              { headers.map(({ name }) => <td key={name}>{row[name]}</td>) }
            </tr>
          ))
        }
      </Body>
    </Wrapper>
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired,
    isAsc: PropTypes.bool,
    isDesc: PropTypes.bool,
    sort: PropTypes.string,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.func,
  keyFrom: PropTypes.string,
};

Table.defaultProps = {
  data: [],
  keyFrom: 'id',
};

export default withRouter(Table);
