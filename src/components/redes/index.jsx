import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { RedesConteinerStyle } from './style';
import { Button } from '../button';

export const Redes = () => {
  return (
    <RedesConteinerStyle>
      <Button buttonSize='30px'><FaFacebookF /></Button>
      <Button buttonSize='30px'><FaTwitter /></Button>
      <Button buttonSize='30px'><FaInstagram /></Button>
      <Button buttonSize='30px'><FaGithub /></Button>
      <Button buttonSize='30px'><FaLinkedinIn /></Button>
    </RedesConteinerStyle>
  );
};

