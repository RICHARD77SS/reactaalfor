import React from 'react';
import { Link } from 'react-router-dom';
import {  FaShoppingCart } from 'react-icons/fa';
import { SideListStyle } from './styles';
import{ Button } from '../button';
import Menu from '../menu';

const SideList = () => {

  return (
    <SideListStyle>
      <Button size='90px'><Link className='link' to='/login'>Login</Link>
      </Button>
      <Button size='40px'><FaShoppingCart />
      </Button>
      <div className=""><Menu /></div>
    </SideListStyle>
  );
};

export default SideList;