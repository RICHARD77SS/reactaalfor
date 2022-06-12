import React from 'react';

import { DivFlexStyle } from './style';
import {Button} from '../button';

const DivFlexButton = () => {
  return (
    <DivFlexStyle> 
      <Button>Aplicar</Button>
      <Button>Limpar</Button>
    </DivFlexStyle>
  );
};

export default DivFlexButton;