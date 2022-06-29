import React from 'react';
import { Inputs } from './styles';

export const Input = (
  {
    placeholder,
    type,
    inputSize,
    list,
    disabled
  }
) => {
  return (
    <Inputs
      placeholder={ placeholder}
      type={type}
      inputSize={inputSize}
      list={list}
      disabled={disabled}
    >
    </Inputs>
  );
};
