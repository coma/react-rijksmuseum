import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

function Link ({ to, className, children }) {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: inherit;
  line-height: 1;
  height: 16px;
  opacity: ${props => props.disabled ? .25 : 1}
  pointer-events: ${props => props.disabled ? 'none' : 'auto'}
`;

export const List = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 1rem;
  padding: 0;

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li + li {
    margin-left: 16px;
  }
`;

export const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  color: ${props => props.isCurrent ? `rgb(${props.theme.color.white})` : 'inherit' };
  background-color: ${props => props.isCurrent ? `rgb(${props.theme.color.primary})` : 'transparent' };

  & + li {
    margin-left: 16px;
  }
`;

export const Page = styled(Link)`
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  text-decoration: none;
  color: inherit;
  min-width: 24px;
  line-height: 24px;
  padding: 0 4px;
  text-align: center;
`;
