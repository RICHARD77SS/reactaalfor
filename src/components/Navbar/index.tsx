import React from 'react';
import { Container } from './styles';
import NavList from '../navList'
import ButtonGoogle from '../buttonGoogle'
import ButtonMenu from '../buttonMenu'

interface Props {
  toggleTheme(): void;
}

const Navbar: React.FC<Props> = () => {

  return (
    <Container>
      <NavList />
      <ButtonGoogle />
      <ButtonMenu />

    </Container>
  );
};

export default Navbar;
