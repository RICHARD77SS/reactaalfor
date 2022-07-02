import React from 'react';
import { useState } from 'react';
import { MenuIcon } from './styles.ts';
import MenuItem from '../MenuItem';
import styled from 'styled-components';

const MenuItems = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.primary};
  transform: translateX(-90%);
  position: absolute;
  z-index: 999;
`;



const Menu = () => {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <MenuIcon>
      <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
        <div className={active ? 'icoon icoonActive' : 'icoon'}></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <MenuItems>
          <MenuItem />
        </MenuItems>
      </div>
    </MenuIcon>
  );
};

export default Menu;
