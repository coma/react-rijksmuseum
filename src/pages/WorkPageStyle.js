import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 47px;
`;

export const Preview = styled.div`
  width: 372px;
  height: 517px;
  margin-right: 107px;
  position: sticky;
  top: 16px;
`;

export const Info = styled.div`
  flex: 1;
  line-height: 1.4;
`;

export const Title = styled.div`
  font-size: ${props => props.theme.fontSize.big};
  margin-bottom: 40px;
`;

export const Author = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  margin-bottom: 16px;
`;

export const Details = styled.ul`
  list-style: none;
  border-top: 2px solid rgb(${props => props.theme.color.primary});
  margin: 60px 0 0 0;
  padding: 0;

  & > li {
    list-style: none;
    display: flex;
    align-items: flex-start;
    padding: 34px 0;
    margin: 0;
  }

  & > li + li {
    border-top: 1px solid rgb(${props => props.theme.color.border});
  }
`;

export const Section = styled.div`
  min-width: 169px;
`;

export const Data = styled.table`
  flex: 1;
  border-collapse: collapse;
  font-size: ${props => props.theme.fontSize.tiny};

  th {
    width: 160px;
    font-weight: 400;
  }

  td, th {
    padding: 1em;
  }
`;
