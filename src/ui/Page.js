import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import { Wrapper, Content } from './PageStyle';

function Page ({ title, children }) {
  return (
    <Wrapper>
      <TopBar title={title} />
      <Content>{children}</Content>
    </Wrapper>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
