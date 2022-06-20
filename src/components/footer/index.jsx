import React from 'react';

import { FooterStyle } from './styles';
import { Redes } from '../redes';
import FooterList from '../footerList';
import { FooterDivStyle } from './styles';
import Logo from '../Logo';

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterDivStyle>
        <Redes />
        <Logo />
      </FooterDivStyle>
      <FooterList />
    </FooterStyle>
  );
};