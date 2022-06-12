import React from 'react';

import { DivFlexCheckStyle } from './style';
import InputCheck from '../inputCheckbox';

const DivFlexCheck: React.FC = () => {
  return (
    <DivFlexCheckStyle> 
      <InputCheck />
      <InputCheck />
    </DivFlexCheckStyle>
  );
};

export default DivFlexCheck;