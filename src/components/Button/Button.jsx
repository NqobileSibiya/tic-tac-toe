import React from 'react';
import { ButtonWrapper } from './Button.style';

const Button = ({ primary, children }) => {
    return (
      <ButtonWrapper primary={primary}>
        {children}
      </ButtonWrapper>
    );
  };
export default Button;