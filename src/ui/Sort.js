import React from 'react';
import PropTypes from 'prop-types';
import { None, Asc, Desc } from './SortStyle';

function Sort ({ isAsc, isDesc, ...props }) {
  if (isAsc) {
    return <Asc {...props} />;
  }

  if (isDesc) {
    return <Desc {...props} />;
  }

  return <None {...props} />;
}

Sort.propTypes = {
  to: PropTypes.string,
  isAsc: PropTypes.bool,
  isDesc: PropTypes.bool,
};

Sort.defaultProps = {
  to: '.',
  isAsc: false,
  isDesc: false,
};

export default Sort;
