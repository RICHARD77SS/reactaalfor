import React from 'react';

import { ButtonStyle } from './style';

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  return (
    <ButtonStyle onClick={onClick} type={type} >{ children }</ButtonStyle>
  );
};
