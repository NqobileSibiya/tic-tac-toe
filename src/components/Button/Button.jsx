import React from 'react';
import { ButtonWrapper } from './Button.style';

function Button(props) {
  return (
  <ButtonWrapper {...props}>
  {props.children}
  </ButtonWrapper>
  )
}

export default Button;