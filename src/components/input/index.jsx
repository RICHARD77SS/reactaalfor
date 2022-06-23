import React from 'react';
import { Inputs } from './styles';

export const Input = (
  {
    placeholder,
    type,
    inputSize,
    inputStyle,
    list,
    disabled
  }
) => {
  return (
    <Inputs
      placeholder={ placeholder}
      type={type}
      inputSize={inputSize}
      inputStyle={inputStyle}
      list={list}
      disabled={disabled}
    >
    </Inputs>
  );
};
