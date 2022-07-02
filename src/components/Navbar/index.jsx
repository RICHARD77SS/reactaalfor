import React from 'react';

import { Container } from './styles';

import SideList from '../sideList';
import { NavList } from '../navList'

const Navbar = () => {

  return (
    <Container>
      <NavList />
      <SideList />
    </Container>
  );
};

export default Navbar;
