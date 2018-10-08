import styled from 'styled-components';

export const BreadCrumbsAndSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const TableTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.regular};
  margin-bottom: 15px;
`;

export const SearchPages = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  background-color: rgba(${props => props.theme.color.light}, .9);
  position: sticky;
  bottom: 0;
`;
