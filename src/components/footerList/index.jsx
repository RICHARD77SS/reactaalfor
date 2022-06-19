import React from 'react';
import {Link } from 'react-router-dom';

import { FooterListStyle } from './styles';
import { Button } from '../button';



const FooterList = () => {
  
  return (
    <FooterListStyle>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='0px' buttonSize='100px'><Link className='link' to='/'>Home</Link></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='0px' buttonSize='100px'><Link className='link' to='/store'>Store</Link></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='0px' buttonSize='100px'><Link className='link' to='/contact'>Contact</Link></Button>
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='0px' buttonSize='100px'><Link className='link' to='/abault'>Abault</Link></Button>
    </FooterListStyle>
  );
};

export default FooterList;