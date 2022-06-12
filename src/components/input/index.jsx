import React from 'react';
import { Inputs } from './styles';

const Input = (
  {
    placeholder,
    type,
    inputSize,
    inputStyle
  }
) => {
  return (
    <Inputs
      placeholder={placeholder}
      type={type}
      inputSize={inputSize}
      inputStyle={inputStyle}
    >
      </Inputs>
  );
};

export default Input;