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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const Input: React.FC<Props> = (
  {
    placeholder,
    min,
    max,
    type,
    inputSize,
    list,
    disabled,
    className,
    required,
    onChange,
    step
  }
) => (
  <Inputs
      min={min}
      max={max}
      step={step}
      placeholder={ placeholder}
      type={type}
      inputSize={inputSize}
      list={list}
      disabled={disabled}
      className={className}
      required={required}
      onChange={onChange}
    >
    </Inputs>
);

