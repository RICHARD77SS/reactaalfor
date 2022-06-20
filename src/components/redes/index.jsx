import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { RedesConteinerStyle } from './style';
import { Button } from '../button';

export const Redes = () => {
  return (
    <RedesConteinerStyle>
      <Button buttonColor={props => props.theme.colors.primary} buttonSize='30px'><FaFacebookF /></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonSize='30px'><FaTwitter /></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonSize='30px'><FaInstagram /></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonSize='30px'><FaGithub /></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonSize='30px'><FaLinkedinIn /></Button>
    </RedesConteinerStyle>
  );
};

