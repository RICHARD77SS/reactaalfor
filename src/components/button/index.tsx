import React from 'react';

import { ButtonStyle } from './styles'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: string;
  border: string
};

export const Button = ({
  onClick,
  children,
  disabled,
  type,
  size,
  border='10px'
}: ButtonProps) => {
  return (
    <ButtonStyle
      size={size}
      border={border}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};
