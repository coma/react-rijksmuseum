import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 40px;
    background: linear-gradient(to top, rgba(0, 0, 0, .75) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 10px;
  right: 16px;
  display: flex;
  align-items: center;
  z-index: 1;

  button {
    font-size: 1rem;
    padding: 0;
    margin: 0;
    height: 1em;
    border: none;
    line-height: 1;
    background-color: transparent;
    color: rgb(${props => props.theme.color.white});
    outline: none;
    cursor: pointer;
  }

  button + button {
    margin-left: 1em;
  }
`;
