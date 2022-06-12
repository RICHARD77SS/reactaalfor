import React from 'react';

import { InputRangeStyle } from './styles';

const InputRange: React.FC = () => {

  return (
    <InputRangeStyle step='{10}' min='{0}' max='{10000}' type='range' />
  );
};

export default InputRange;