import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgb(${props => props.theme.color.border});
`;

export const Head = styled.thead`
  th {
    font-weight: ${props => props.theme.fontWeight.regular};
    padding: 15px 24px;
    text-align: left;
    background-color: ${props => props.theme.color.header};
  }
`;

export const Body = styled.tbody`
  td {
    padding: 15px 24px;
    border-top: 1px solid rgb(${props => props.theme.color.border});
    cursor: pointer;
  }

  tr:hover {
    td {
      border-top: 1px solid rgb(${props => props.theme.color.highlight});
      border-bottom: 1px solid rgb(${props => props.theme.color.highlight});
      background-color: ${props => props.theme.color.hover};
    }

    td:first-child {
      border-left: 1px solid rgb(${props => props.theme.color.highlight});
    }

    td:last-child {
      border-right: 1px solid rgb(${props => props.theme.color.highlight});
    }
  }
`;
