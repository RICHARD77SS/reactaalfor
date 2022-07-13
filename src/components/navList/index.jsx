import React from 'react';
import {Link } from 'react-router-dom';

import { NavListStyle } from './styles';



export const NavList = () => {
  
  return (
    <NavListStyle>
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/store'>Store</Link>
      <Link className='link' to='/gradientGenerator'>GradGen</Link>
      <Link className='link' to='/contact'>Contact</Link>
      <Link className='link' to='/abault'>Abault</Link>
      <Link className='link' to='/login'>Login</Link>
      <Link className='link' to='/register'>Register</Link>
      <Link className='link' to='/admi'>Adm</Link>
    </NavListStyle>
  );
}; 