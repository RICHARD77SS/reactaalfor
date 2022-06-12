import React from 'react';
import { StoreConteinerFlex } from './styles'
import Filters from '../filters'
import ListProduct from '../listProduct'


const StoreConteiner: React.FC = () => {

  return (
    <StoreConteinerFlex>
      <Filters></Filters>
      <ListProduct></ListProduct>
      
    </StoreConteinerFlex>
  );
};

export default StoreConteiner;

