import React from 'react';
import { FaBars, FaGoogle, FaShoppingCart } from 'react-icons/fa';
import { SideListStyle } from './styles';
import{ Button } from '../button';

const SideList = () => {
  
  return (
    <SideListStyle>
      <Button buttonSize='100px'><FaGoogle /> Login</Button>
      <Button buttonSize='50px'>Login</Button>
      <Button buttonSize='40px'><FaShoppingCart /></Button>
      <Button buttonSize='40px'><FaBars /></Button>
    </SideListStyle>
  );
};

export default SideList;