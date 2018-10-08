import React from 'react';
import PropTypes from 'prop-types';
import dots from '../util/dots';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { Nav, Arrow, List, Item, Page } from './PagesStyle';

function Pages ({ total, current, link }) {
  const prev = current - 1;
  const next = current + 1;

  return (
    <Nav>
      <Arrow disabled={prev < 0} to={link(prev)}>
        <ChevronLeftIcon />
      </Arrow>
      <List>
        {dots(current, total).map((page, index) => (
          <Item key={index} isCurrent={current === page}>
            { page === '...' ? '...' : <Page to={link(page)}>{page + 1}</Page> }
          </Item>
        ))}
      </List>
      <Arrow disabled={next >= total} to={link(next)}>
        <ChevronRightIcon />
      </Arrow>
    </Nav>
  );
}

Pages.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  link: PropTypes.func.isRequired,
};

Pages.defaultProps = {
  total: 0,
  current: 0,
};

export default Pages;
