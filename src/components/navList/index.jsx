import React from 'react';

import { NavListStyle } from './styles';
import{ Button } from '../button';

const NavList = () => {
  
  return (
    <NavListStyle>
      <Button>Home</Button>
      <Button>Store</Button>
      <Button>Abault</Button>
      <Button>Contact</Button>
    </NavListStyle>
  );
};

export default NavList;