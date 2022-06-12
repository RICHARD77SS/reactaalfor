import React from 'react';

import { DivFlexCheckStyle } from './style';
import InputRadio from '../inputRadio';

const DivFlexRadio: React.FC = () => {
  return (
    <DivFlexCheckStyle> 
      <InputRadio />
      <InputRadio />
    </DivFlexCheckStyle>
  );
};

export default DivFlexRadio;