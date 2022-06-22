import React from 'react';
import { ProdutoPageContainerSt } from './styles'
import { Title } from '../title'
import { Button } from '../button'
import { Input } from '../input'

export const ProdutoPage = ({
  produto,
  preco,
  parcela,
  productImageSrc,
  productImageAlt,
  productDescription,
  frete,
  prasoEntrega
}

) => {
  
  return (
    <ProdutoPageContainerSt>
      <div className="ProdutoContent">
        <div className="ProdutoConteinerImage">
          <div className="ProdutoAddFav">
          </div>
          <img src={productImageSrc} alt={productImageAlt} />
        </div>
        <div className="ProdutoBuy">
          <Title>Product{produto}</Title>
          <Title>R$ 500,00{preco}</Title>
          <Title>ou até 5x de 100,00{parcela}</Title>
          <Title>Ver meios de pagamento</Title>
          <Title>Frete{frete}</Title>
          <Title>Prazo de entrega {prasoEntrega}</Title>
          <Title>Calcular o frete e o prazo de entrega</Title>
          <Button>Buy</Button>
          <Button>Add to cart</Button>
        </div>

      </div>
      <div className="ProdutoInfos">
        <div className="ProdutoDesc">
          <Title>Desc produto {produto}</Title>
          <Title>{productDescription}</Title>
          <Title></Title>
        </div>
        <div className="lojaInfo">
          <Title>Avaliaçoes</Title>
        </div>
      </div>
      <div className="Perguntas">
        <Input /><Button>Perguntar</Button>
      </div>
      <div className="PerguntasRespostas">
        <ul>
          <li>This response</li>
        </ul>
      </div>
      <div className="MaisProdutos">

      </div>

    </ProdutoPageContainerSt>
  )
}