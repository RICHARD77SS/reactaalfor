import React from 'react';
import { Title } from '../title';

import { PortStyle } from './style';
import { PortsList } from '../portsList';

export const PortDesc = () => {
  return (
    <PortStyle>
      <Title fontSize='1rem' fontColor={props => props.theme.colors.text}>
        This is the Port Component 
        The port component represents the portifolios of the My testes
        in down 
        <br></br>
        This is the Port Component 
        The port component represents the portifolios of the My testes
        in down 
        <br></br>
        This is the Port Component 
        The port component represents the portifolios of the My testes
        in down 
      </Title>
      <PortsList />
    </PortStyle>
  )
}