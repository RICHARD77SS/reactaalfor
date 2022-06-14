import React from 'react';
import { useState } from 'react';
import { MenuIcon } from './styles.ts';
import ListItem from '../listMenuItems';
import './styles.css';
import styled from 'styled-components';

const MenuItems = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background-color: #f5f5f5;
  transform: translateX(-90%);
  position: absolute;
`;



const Menu = () => {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <MenuIcon>
      <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
        <div className="icoon"></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <MenuItems>
          <ListItem />
        </MenuItems>
      </div>
    </MenuIcon>
  );
};

export default Menu;
