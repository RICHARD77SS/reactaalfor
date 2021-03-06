import React from 'react';
import {Link } from 'react-router-dom';

import { FooterListStyle } from './styles';
import { Button } from '../button';



const FooterList = () => {
  
  return (
    <FooterListStyle>
      <Button size='100px'><Link className='link' to='/'>Home</Link></Button>
      <Button size='100px'><Link className='link' to='/store'>Store</Link></Button>
      <Button size='100px'><Link className='link' to='/contact'>Contact</Link></Button>
      <Button size='100px'><Link className='link' to='/abault'>Abault</Link></Button>
    </FooterListStyle>
  );
};

export default FooterList;