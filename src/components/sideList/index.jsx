import React from 'react';
import { FaGoogle, FaShoppingCart } from 'react-icons/fa';
import { SideListStyle } from './styles';
import{ Button } from '../button';
import Menu from '../menu';

const SideList = () => {

  return (
    <SideListStyle>
      <Button buttonSize='100px'><FaGoogle /> Login</Button>
      <Button buttonSize='50px'>Login</Button>
      <Button buttonSize='40px'><FaShoppingCart /></Button>
      <div className="">aa<Menu /></div>
      
      
    </SideListStyle>
  );
};

export default SideList;