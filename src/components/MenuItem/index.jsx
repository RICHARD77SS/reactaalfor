import React from 'react';
import { Link } from 'react-router-dom';

import { ListItemStyle, UlMenuItemStyle } from './styles';

const MenuItem = () => {
  
  return (
    <UlMenuItemStyle >

      <ListItemStyle><Link className='LinkRd' to='/'>Home</Link></ListItemStyle>
      <ListItemStyle><Link className='LinkRd' to='/store'>Store</Link></ListItemStyle>
      <ListItemStyle><Link className='LinkRd' to='/contact'>Contact</Link></ListItemStyle>
      <ListItemStyle><Link className='LinkRd' to='/abault'>Abault</Link></ListItemStyle>
    </UlMenuItemStyle>
  );
};

export default MenuItem;