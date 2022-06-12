import React from 'react';

import { NavListStyle } from './styles';
import{ Button } from '../button';

const NavList = () => {
  
  return (
    <NavListStyle>
      <Button buttonSize='100px'>Home</Button>
      <Button buttonSize='100px'>Store</Button>
      <Button buttonSize='100px'>Abault</Button>
      <Button buttonSize='100px'>Contact</Button>
    </NavListStyle>
  );
};

export default NavList;