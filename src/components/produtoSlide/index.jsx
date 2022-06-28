import React from 'react';

import {
  ProdutoSlideImgSt
} from './styles';
import { Title } from '../title';
import { Button } from '../button';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { app } from '../../services/firebaseConfig';

export const Prod = () => {
  const [name, setName] = useState("");
  const [preco, setpreco] = useState("");
  const [produtos, setprodutos] = useState([]);

  const db = getFirestore(app);
  const produtosCollectionRef = collection(db, "produtos");

  async function criarDado() {
    try {
      const produto = await addDoc(collection(db, "produtos"), {
        name,
        preco
      });

      console.log("dados salvos com sucessos", produto);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {
    const getprodutos = async () => {
      const data = await getDocs(produtosCollectionRef);
      setprodutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getprodutos();
  }, []);

  async function deleteproduto(id) {
    const produtoDoc = doc(db, "produtos", id);
    await deleteDoc(produtoDoc);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="preço"
        value={preco}
        onChange={(e) => setpreco(e.target.value)}
      />
      <button onClick={criarDado}>Criar dado</button>

      <ul>
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
                  onClick={() => deleteproduto(produto.id)}
                  type='button'>deletar</Button>
              </ProdutoSlideImgSt>
            </>
          );
        })}
      </ul>
    </div>
  );
};