import React from 'react';

import { DivFlexCheckStyle } from './style';
import { Input } from '../input';

const DivFlexRadio = () => {
  return (
    <DivFlexCheckStyle> 
      <Input type='radio' />
      <Input type='radio' />
    </DivFlexCheckStyle>
  );
};

export default DivFlexRadio;