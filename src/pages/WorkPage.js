import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromQueryParse } from '../util/fromQuery';
import { fetchWork } from '../store/workActions';
import WorkPageLoading from './WorkPageLoading';
import WorkPagePartial from './WorkPagePartial';
import WorkPageFull from './WorkPageFull';

class WorkPage extends Component {
  componentDidMount() {
    this.props.fetchWork(this.props.match.params.workId);
  }

  render() {
    const { isFetching, isFull, ...props } = this.props;

    if (isFetching) {
      return <WorkPageLoading />;
    }

    if (!isFull) {
      return <WorkPagePartial {...props} />;
    }

    return <WorkPageFull {...props} />;
  }
}

function mapState(state, { location, match }) {
  const work = state.work[match.params.workId];

  if (!work) {
    return { isFetching: true };
  }

  const breadCrumbs = [
    { url: '/', text: 'Museo' },
    { url: fromQueryParse(location), text: 'Obras de arte' },
    { url: `${location.pathname}${location.search}`, text: work.title },
  ];

  return { ...work, breadCrumbs };
}

const actions = { fetchWork };

export default connect(mapState, actions)(WorkPage);
