import React from 'react';

import {
  ProdutoSlideImgSt,
  MaisProdutosSlideSt
} from './styles';
import { Title } from '../title';
import { Button } from '../button';
import {
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { app } from '../../services/firebaseConfig';

export const Prod = () => {
  const [produtos, setprodutos] = useState([]);

  const db = getFirestore(app);
  const produtosCollectionRef = collection(db, "produtos");

  useEffect(() => {
    const getprodutos = async () => {
      const data = await getDocs(produtosCollectionRef);
      setprodutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getprodutos();
  }, []);

  return (
    <div>
      <MaisProdutosSlideSt>
        {produtos.map((produto) => {
          return (
            <>
              <ProdutoSlideImgSt>
                <img className='img2' src="https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3090-ex-gaming-pink-1-click-oc-24gb-gddr6x-384bit_104303.png" alt='{productImageAlt}' />
                <Title>{produto.name}</Title>
                <Title>{produto.preco}</Title>
                <Button buttonBorderRadius='10px'
                  buttonColor={props => props.theme.colors.background}
                  buttonSize='80px'
                  onClick='{() => deleteproduto(produto.id)}'
                  type='button'>Ver Mais</Button>
              </ProdutoSlideImgSt>
            </>
          );
        })}
      </MaisProdutosSlideSt>
    </div>
  );
};
export const ProdutosEletronicos = () => {
  const [eletronicproducts, seteletronicproducts] = useState([]);

  const db = getFirestore(app);
  const eletronicproductsCollectionRef = collection(db, "eletronicproducts");

  useEffect(() => {
    const getprodutos = async () => {
      const data = await getDocs(eletronicproductsCollectionRef);
      seteletronicproducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getprodutos();
  }, []);

  return (
    <div>
      <MaisProdutosSlideSt>
        {eletronicproducts.map((produto) => {
          return (
            <>
              <ProdutoSlideImgSt>
                <Title>{produto.name}</Title>
                <Title>R$ {produto.price}</Title>
                <Title>{produto.description}</Title>
                <Title>{produto.avaliation}</Title>
                <Title>{produto.inventory}</Title>
                <Title>{produto.comments}</Title>
                <Title>{produto.image}</Title>
                <Button buttonBorderRadius='10px'
                  buttonColor={props => props.theme.colors.background}
                  buttonSize='80px'
                  onClick='{() => deleteproduto(produto.id)}'
                  type='button'>Ver Mais</Button>
              </ProdutoSlideImgSt>
            </>
          );
        })}
      </MaisProdutosSlideSt>
    </div>
  );
};