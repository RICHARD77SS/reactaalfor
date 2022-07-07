import React from 'react';

import { DivFlexCheckStyle } from './style';
import { Input } from '../input';
import { Label } from '../label';



const DivFlexCheck = () => {
  return (
    <DivFlexCheckStyle> 
      <Input type='checkbox' /><Label>Linktree</Label>
    </DivFlexCheckStyle>
  );
};

export default DivFlexCheck;