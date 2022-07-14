import React from 'react';

import { ButtonStyle } from './styles'

interface ButtonProps {
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  name?: string;
  value?: string;
  background?: string;
};

export const Button = ({
  onClick,
  children,
  disabled,
  name,
  value,
  type,
  width,
  height='30px',
  border,
  radius = '10px',
  background
}: ButtonProps) => {
  return (
    <ButtonStyle
      width={width}
      height={height}
      border={border}
      radius={radius}
      value={value}
      name={name} 
      type={type}
      onClick={onClick}
      disabled={disabled}
      background={background}
    >
      {children}
    </ButtonStyle>
  );
};
