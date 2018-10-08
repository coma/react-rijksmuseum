import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  padding: 7px 0;
  margin: 0;
  height: 32px;
  font-size: 1rem;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: transparent transparent rgb(${props => props.theme.color.primary}) transparent;
  outline: none;
`;

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
};

export default Input;
