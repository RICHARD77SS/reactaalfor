import React from 'react';

import { DivFlexArroundStyle } from './style';
import { Label } from '../label';

const DivFlexLabel: React.FC = () => {
  return (
    <DivFlexArroundStyle> 
      <Label>R$0</Label>
      <Label>R$10000</Label>
    </DivFlexArroundStyle>
  );
};

export default DivFlexLabel;