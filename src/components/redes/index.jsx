import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { RedesConteinerStyle } from './style';
import { Button } from '../button';

export const Redes = () => {
  return (
    <RedesConteinerStyle>
      <Button width='30px' radius='50px'><FaFacebookF /></Button>
      <Button width='30px' radius='50px'><FaTwitter /></Button>
      <Button width='30px' radius='50px'><FaInstagram /></Button>
      <Button width='30px' radius='50px'><FaGithub /></Button>
      <Button width='30px' radius='50px'><FaLinkedinIn /></Button>
    </RedesConteinerStyle>
  );
};

