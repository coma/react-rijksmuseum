import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MenuToggle, Title } from './TopBarStyle';
import { MenuIcon } from './Icons';

function TopBar ({ title }) {
  return (
    <Wrapper>
      <MenuToggle>
        <MenuIcon />
      </MenuToggle>
      <Title>{title}</Title>
    </Wrapper>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
};

TopBar.defaultProps = {
  title: '',
};

export default TopBar;
