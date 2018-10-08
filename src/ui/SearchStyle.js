import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;

  ${Input} {
    width: 306px;
  }

  ${Button} {
    width: 32px;
  }
`;
