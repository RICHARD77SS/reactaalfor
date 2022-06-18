import React from 'react';

import { DivFlexStyle } from './style';
import {Button} from '../button';

const DivFlexButton = () => {
  return (
    <DivFlexStyle> 
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'>Aplicar</Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'>Limpar</Button>
    </DivFlexStyle>
  );
};

export default DivFlexButton;