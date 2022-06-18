import React from 'react';

import { ButtonStyle } from './style';

export const Button = ({
  children,
  type,
  onClick,
  buttonColor,
  buttonSize,
  buttonBorderRadius
}) => {
  return (
    <ButtonStyle
      buttonBorderRadius={buttonBorderRadius}
      buttonColor={buttonColor}
      buttonSize={buttonSize}
      onClick={onClick}
      type={type}
    >{children}
    </ButtonStyle>
  );
};
