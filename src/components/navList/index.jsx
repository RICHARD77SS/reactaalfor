import React from 'react';
import {Link } from 'react-router-dom';

import { NavListStyle } from './styles';
import { Button } from '../button';



export const NavList = () => {
  
  return (
    <NavListStyle>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'><Link className='link' to='/'>Home</Link></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'><Link className='link' to='/store'>Store</Link></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'><Link className='link' to='/contact'>Contact</Link></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'><Link className='link' to='/abault'>Abault</Link></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'><Link className='link' to='/admi'>Adm</Link></Button>
    </NavListStyle>
  );
}; 