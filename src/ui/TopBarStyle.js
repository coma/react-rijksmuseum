import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 24px;
  background-color: rgb(${props => props.theme.color.dark});
`;

export const MenuToggle = styled.button`
  box-sizing: border-box;
  font-size: 16px;
  padding: 0;
  margin: 0 32px 0 0;
  height: 1em;
  border: none;
  line-height: 1;
  text-align: center;
  background-color: transparent;
  color: rgb(${props => props.theme.color.highlight});
  outline: none;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.regular};
  color: rgb(${props => props.theme.color.white});
`;
