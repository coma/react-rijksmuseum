import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const None = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  ::after {
    content: "";
    display: block;
    margin-left: 1em;
    border: 4px solid transparent;
  }
`;

export const Asc = styled(None)`
  ::after {
    margin-bottom: 3px;
    border-bottom-color: currentColor;
  }
`;

export const Desc = styled(None)`
  ::after {
    margin-top: 3px;
    border-top-color: currentColor;
  }
`;
