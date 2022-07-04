import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore";
import { app } from '../../services/firebaseConfig';

import {
  ProdutoSlideImgbSt,
  ProdutosSt,
  ProdutoCardSt
} from './styles';
import Rating from '@mui/material/Rating';
import { Title } from '../title';
import { Button } from '../button';

export const PlacasDeVideo = () => {
  const [placasDeVideo, setplacasDeVideo] = useState([]);

  const db = getFirestore(app);
  const placasDeVideoCollectionRef = collection(db, "placasDeVideo");

  useEffect(() => {
    const getplacasDeVideo = async () => {
      const data = await getDocs(placasDeVideoCollectionRef);
      setplacasDeVideo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getplacasDeVideo();
  }, []);

  return (
    <div>
      <ProdutosSt>
        {placasDeVideo.map((produto) => {
          return (
            <ProdutoCardSt>
              <ProdutoSlideImgbSt>
                <img className='img' src={produto.image} alt='{productImageAlt}' />
              </ProdutoSlideImgbSt>
              <Title>{produto.name}</Title>
              <Title>R$ {produto.price}</Title>
              <Rating name="read-only" value={produto.avaliation} readOnly />
              <Button size='80px'
                type='button'><Link to='/produto'>Ver Mais</Link></Button>
            </ProdutoCardSt>
          );
        })}
      </ProdutosSt>
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
      <ProdutosSt>
        {eletronicproducts.map((produto) => {
          return (
            <ProdutoCardSt>
              <ProdutoSlideImgbSt>
                <img className='img' src={produto.image} alt='{productImageAlt}' />
              </ProdutoSlideImgbSt>
                <Title>{produto.name}</Title>
                <Title>R$ {produto.price}</Title>
                <Rating name="read-only" value={produto.avaliation} readOnly />
                <Button size='80px'
                type='button'><Link to='/produto'>Ver Mais</Link></Button>
            </ProdutoCardSt>
          );
        })}
      </ProdutosSt>
  );
};