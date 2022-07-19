import React from 'react';

import { CarrinhoSt } from './styles';
import { Button } from '../button';
import { Title } from '../title';

export const Carrinho: React.FC = () => {
  return (
    <CarrinhoSt>
      <div className="carrinhoVazio">
        <h2>Seu carrinho de compras está vazio.</h2>
        <Button>Adicionar items</Button>
        <div className="itemsSalvos">
          <Title fontSize='1rem'>Items Salvos</Title>
          <ul>
            <li>Nenhum item Salvo</li>
            <li></li>
          </ul>
        </div>
        <div className="comprarNovamente">
          <Title fontSize='1rem'>Comprar novamente</Title>
          <ul>
            <li>Nenhuma compra anterior</li>
          </ul>

        </div>
      </div>
      <div className="CarrinhoCheio">

      </div>
    </CarrinhoSt>
  )
}