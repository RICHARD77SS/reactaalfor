import React from 'react';

import { FooterStyle } from './styles';
import { Redes } from '../redes';
import FooterList from '../footerList';


export const Footer = () => {
  return (
    <FooterStyle>
      <Redes />
      <FooterList />
    </FooterStyle>
  );
};