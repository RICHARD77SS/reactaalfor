import React from 'react';
import { Inputs } from './styles';


interface Props {
  inputSize: string;
  placeholder: string;
  type: string;
  list?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export const Input: React.FC<Props> = (
  {
    placeholder,
    type,
    inputSize,
    list,
    disabled,
    className,
    required
  }
) => (
    <Inputs
      placeholder={ placeholder}
      type={type}
      inputSize={inputSize}
      list={list}
      disabled={disabled}
      className={className}
      required={required}
    >
    </Inputs>
);

