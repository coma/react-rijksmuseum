import styled from 'styled-components';

export const Wrapper = styled.nav`
  ol, li {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 32px;
  }

  li::after {
    content: "/";
    display: block;
    margin: 0 1em;
    font-size: 1rem;
  }

  a {
    display: block;
    max-width: 20em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
    text-decoration: none;
    color: rgb(${props => props.theme.color.primary});
  }
`;
