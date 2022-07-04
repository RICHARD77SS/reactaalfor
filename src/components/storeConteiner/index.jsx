import React from 'react';

import { StoreConteinerFlex, ListsProductsStyle } from './styles'
import Filters from '../filters'
import { ProdutosEletronicos, PlacasDeVideo } from '../produtoSlide'


export function StoreSlider() {
  return (
    <> 
      
    </>
  );
}


const StoreConteiner = () => {

  return (
    <StoreConteinerFlex>
      <Filters></Filters>
      <ListsProductsStyle>
        <ProdutosEletronicos />
      </ListsProductsStyle>
      <ListsProductsStyle>
        <PlacasDeVideo />
      </ListsProductsStyle>
    </StoreConteinerFlex>
  );
};

export default StoreConteiner;

