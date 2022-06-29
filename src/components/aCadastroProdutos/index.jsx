import React from 'react';

import {
  ProdutoSlideImgSt,
  MaisProdutosSlideSt,
  CadProdutosSlideSt,
  ProdutoSlideImgConteinerSt,
  PCardAjustFlexSt,
  PCardAjustTxtSt
} from './styles';
import { Title } from '../title';
import { Button } from '../button';
import Rating from '@mui/material/Rating';
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

export const ACadastroProduto = () => {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [avaliation, setavaliation] = useState("");
  const [inventory, setinventory] = useState("");
  const [comments, setcomments] = useState("");
  const [image, setimage] = useState("");
  const [eletronicproducts, seteletronicproducts] = useState([]);

  const db = getFirestore(app);
  const eletronicproductsCollectionRef = collection(db, "eletronicproducts");

  async function criarDado() {
    try {
      const produto = await addDoc(collection(db, "eletronicproducts"), {
        name,
        price,
        description,
        avaliation,
        inventory,
        comments,
        image
      });

      console.log("dados salvos com sucessos", produto);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {
    const getprodutos = async () => {
      const data = await getDocs(eletronicproductsCollectionRef);
      seteletronicproducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getprodutos();
  }, []);



  async function deleteproduto(id) {
    const produtoDoc = doc(db, "eletronicproducts", id);
    await deleteDoc(produtoDoc);
  }

  return (
    <CadProdutosSlideSt>
      <input
        type="text"
        placeholder=" Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder=" Preço do produto"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <input
        type="text"
        placeholder=" Descrição do produto"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <input
        type="text"
        placeholder=" Avaliaçao do produto"
        value={avaliation}
        onChange={(e) => setavaliation(e.target.value)}
      />
      <input
        type="text"
        placeholder=" Quantidade de produtos"
        value={inventory}
        onChange={(e) => setinventory(e.target.value)}
      />
      <input
        type="text"
        placeholder=" Comentarios"
        value={comments}
        onChange={(e) => setcomments(e.target.value)}
      />
      <input
        type="text"
        placeholder=" image"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'
        onClick={criarDado}> Criar dado</Button>

      <MaisProdutosSlideSt>
        {eletronicproducts.map((produto) => {
          return (
            <>
              <ProdutoSlideImgSt>
                <PCardAjustFlexSt>
                  <ProdutoSlideImgConteinerSt>
                    <img className='imgc' src={produto.image} alt="" />
                  </ProdutoSlideImgConteinerSt>
                  <PCardAjustTxtSt>
                    <Title>{produto.name}</Title>
                    <Title>R$ {produto.price}</Title>
                    <Button buttonBorderRadius='8px'
                      buttonColor={props => props.theme.colors.background}
                      buttonSize='fit-content'
                      onClick={() => deleteproduto(produto.id)}
                      type='button'>Buy</Button>
                    <Title fontSize='.6rem' >Estoque: {produto.inventory}</Title>
                  </PCardAjustTxtSt>
                </PCardAjustFlexSt>
                <Rating name="read-only" value={produto.avaliation} readOnly />
                <Title fontSize='.8rem'>{produto.description}</Title>
                <details>
                  <summary>Comments</summary>
                  <Title fontSize='.6rem'>{produto.comments}</Title>

                </details>
                <Button buttonBorderRadius='10px'
                  buttonColor={props => props.theme.colors.background}
                  buttonSize='80px'
                  onClick={() => deleteproduto(produto.id)}
                  type='button'>Deletar</Button>
              </ProdutoSlideImgSt>
            </>
          );
        })}
      </MaisProdutosSlideSt>
    </CadProdutosSlideSt>
  );
};