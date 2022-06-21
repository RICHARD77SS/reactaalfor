import React from 'react';

import { AbaultConteinerStyle } from './styles';
import { Title } from '../title';

const Abault = () => {
  return (
    <AbaultConteinerStyle>
      <Title fontSize='2rem' fontColor={props => props.theme.colors.text} >Abault</Title>
      
    </AbaultConteinerStyle>
  );
}

export default Abault;