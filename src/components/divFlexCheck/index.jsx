import React from 'react';

import { DivFlexCheckStyle } from './style';
import { Input } from '../input';

const DivFlexCheck = () => {
  return (
    <DivFlexCheckStyle> 
      <Input type='checkbox' />
      <Input type='checkbox' />
    </DivFlexCheckStyle>
  );
};

export default DivFlexCheck;