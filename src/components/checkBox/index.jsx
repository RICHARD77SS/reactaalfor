import React from 'react';

import { DivFlexCheckStyle, CheckSt } from './style';
import { Input } from '../input';
import { Label } from '../label';



const DivFlexCheck = () => {
  return (
    <DivFlexCheckStyle> 
      <CheckSt>
        <Input type='checkbox' /><Label>Linktree</Label>
      </CheckSt>
      <CheckSt>
        <Input type='checkbox' /><Label>Blog</Label>
      </CheckSt>
      <CheckSt>
        <Input type='checkbox' /><Label>E-commerce</Label>
      </CheckSt>
      <CheckSt>
        <Input type='checkbox' /><Label>Landing Page</Label>
      </CheckSt>
    </DivFlexCheckStyle>
  );
};

export default DivFlexCheck;