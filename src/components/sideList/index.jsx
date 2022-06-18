import React from 'react';
import { FaGoogle, FaShoppingCart } from 'react-icons/fa';
import { SideListStyle } from './styles';
import{ Button } from '../button';
import Menu from '../menu';

const SideList = () => {

  return (
    <SideListStyle>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'><FaGoogle /> Login</Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='50px'>Login</Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='40px'><FaShoppingCart /></Button>
      <div className=""><Menu /></div>
      
      
    </SideListStyle>
  );
};

export default SideList;