import React from 'react';
import { useState } from 'react';
import { MenuIcon, MenuItems } from './styles';
import MenuItem from '../MenuItem';

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
