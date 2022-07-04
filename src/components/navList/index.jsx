import React from 'react';
import {Link } from 'react-router-dom';

import { NavListStyle } from './styles';
import { Button } from '../button';



export const NavList = () => {
  
  return (
    <NavListStyle>
      <Button size='100px'><Link className='link' to='/'>Home</Link></Button>
      <Button size='100px'><Link className='link' to='/store'>Store</Link></Button>
      <Button size='100px'><Link className='link' to='/contact'>Contact</Link></Button>
      <Button size='100px'><Link className='link' to='/abault'>Abault</Link></Button>
      <Button size='100px'><Link className='link' to='/admi'>Adm</Link></Button>
    </NavListStyle>
  );
}; 