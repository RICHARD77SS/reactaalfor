import React from 'react';

import { FaBars, FaGoogle } from 'react-icons/fa';


import { Container } from './styles';
import { Button } from '../button'

import NavList from '../navList'


const Navbar = () => {

  return (
    <Container>
      <NavList />
      <Button buttonSize='100px'><FaGoogle /> Login</Button>
      <Button buttonSize='50px'>Login</Button>
      <Button buttonSize='40px'><FaBars /></Button>

    </Container>
  );
};

export default Navbar;
