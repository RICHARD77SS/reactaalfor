import React from 'react';

import { DivFlexStyle } from './style';
import {Button} from '../button';

const DivFlexButton = () => {
  return (
    <DivFlexStyle> 
      <Button width='100px'>Aplicar</Button>
      <Button width='100px'>Limpar</Button>
    </DivFlexStyle>
  );
};

export default DivFlexButton;