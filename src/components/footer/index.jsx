import React from 'react';

import { FooterStyle } from './styles';
import { Redes } from '../redes';
import FooterList from '../footerList';
import { FooterDivStyle } from './styles';
import Logo from '../logo';

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterDivStyle>
        <Logo />
        <Redes />
      </FooterDivStyle>
      <FooterDivStyle>
        <FooterList />
      </FooterDivStyle>
    </FooterStyle>
  );
};