import React from 'react';
import {Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Button } from '../button';
import { NavListStyle } from './styles';



export const NavList = () => {
  
  return (
    <NavListStyle>
      <Link className='link' to='/'><Button width='fit-content'>Home</Button></Link>
      <Link className='link' to='/store'><Button width='fit-content'>Store</Button></Link>
      <Link className='link' to='/gradientGenerator'><Button width='fit-content'>GradGen</Button></Link>
      <Link className='link' to='/contact'><Button width='fit-content'>Contact</Button></Link>
      <Link className='link' to='/abault'><Button width='fit-content'>Abault</Button></Link>
      <Link className='link' to='/login'><Button width='fit-content'>Login</Button></Link>
      <Link className='link' to='/register'><Button width='fit-content'>Register</Button></Link>
      <Link className='link' to='/admi'><Button width='fit-content'>Adm</Button></Link>
      <Link className='link' to='/perfil'><Button width='fit-content'>Perfil</Button></Link>
      <Link to='/carrinho'><Button width='40px'><FaShoppingCart /></Button></Link>
    </NavListStyle>
  );
}; 