import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0 8px;
  margin: 0;
  height: 32px;
  border: none;
  line-height: 16px;
  text-align: center;
  background-color: rgb(${props => props.theme.color.primary});
  color: rgb(${props => props.theme.color.white});
  outline: none;
`;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
