import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { RedesConteinerStyle } from './style';
import { Button } from '../button';

export const Redes = () => {
  return (
    <RedesConteinerStyle>
      <Button size='30px'><FaFacebookF /></Button>
      <Button size='30px'><FaTwitter /></Button>
      <Button size='30px'><FaInstagram /></Button>
      <Button size='30px'><FaGithub /></Button>
      <Button size='30px'><FaLinkedinIn /></Button>
    </RedesConteinerStyle>
  );
};

