import React from 'react';
import {Link } from 'react-router-dom';

import { ListItemStyle, UlMenuItemStyle } from './styles';

const ListItem = () => {
  
  return (
    <UlMenuItemStyle >
      <ListItemStyle><Link to='/'>Home</Link></ListItemStyle>
      <ListItemStyle><Link to='/store'>Store</Link></ListItemStyle>
      <ListItemStyle><Link to='/contact'>Contact</Link></ListItemStyle>
      <ListItemStyle><Link to='/abault'>Abault</Link></ListItemStyle>
    </UlMenuItemStyle>
  );
};

export default ListItem;