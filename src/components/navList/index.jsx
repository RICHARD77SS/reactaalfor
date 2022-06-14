import React from 'react';
import {Link } from 'react-router-dom';

import { NavListStyle } from './styles';
import { Button } from '../button';



const NavList = () => {
  
  return (
    <NavListStyle>
      <Button buttonSize='100px'><Link to='/'>Home</Link></Button>
      <Button buttonSize='100px'><Link to='/store'>Store</Link></Button>
      <Button buttonSize='100px'><Link to='/contact'>Contact</Link></Button>
      <Button buttonSize='100px'><Link to='/abault'>Abault</Link></Button>
    </NavListStyle>
  );
};

export default NavList;