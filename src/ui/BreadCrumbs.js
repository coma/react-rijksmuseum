import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper } from './BreadCrumbsStyle';

function BreadCrumbs ({ location, links }) {
  return (
    <Wrapper>
      <ol>
        {
          links.map(({ url, text }) => (
            <li key={url}>
              <Link to={url}>{text}</Link>
            </li>
          ))
        }
      </ol>
    </Wrapper>
  );
}

BreadCrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired,
  })),
};

BreadCrumbs.defaultProps = {
  links: [],
};

export default BreadCrumbs;
