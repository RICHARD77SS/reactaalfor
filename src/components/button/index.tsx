import React from 'react';

import { ButtonStyle } from './styles'

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
  width?: string;
  height?: string;
  border?: string;
  radius?: string;
  padding?: string;
  margin?: string;
  name?: string;
  value?: string;
  type?: "button" | "submit" | "reset";
  background?: string;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  children,
  disabled,
  name,
  value,
  type='button',
  width,
  height='2rem',
  border,
  margin,
  radius = '10px',
  padding='.5rem'
}: ButtonProps) => {
  return (
    <ButtonStyle
      width={width}
      height={height}
      border={border}
      radius={radius}
      margin={margin}
      value={value}
      name={name} 
      type={type}
      onClick={onClick}
      disabled={disabled}
      padding={padding}
    >
      {children}
    </ButtonStyle>
  );
};
