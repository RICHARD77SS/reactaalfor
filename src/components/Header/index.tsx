import React, { useContext } from 'react';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container } from './styles';
import Logo from '../logo'
import { Search } from '../search'
import SideList from '../sideList'
interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext); 
  return (
    <Container>
      
      <Logo />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={<FaMoon />}
        uncheckedIcon={<FaSun />}
        height={15}
        width={35}
        handleDiameter={20}
        offColor={shade(0.15, colors.text)}
        onColor={colors.primary}
      />
      <Search />
      <SideList />
    </Container>
  );
};

export default Header;
