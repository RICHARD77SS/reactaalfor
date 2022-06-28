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
        inventory
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
    <div>
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
      <button onClick={criarDado}>Criar dado</button>

      <MaisProdutosSlideSt>
        {eletronicproducts.map((produto) => {
          return (
            <>
              <ProdutoSlideImgSt>
                <Title>{produto.name}</Title>
                <Title>{produto.price}</Title>
                <Title>{produto.description}</Title>
                <Title>{produto.avaliation}</Title>
                <Title>{produto.inventory}</Title>
                <Button buttonBorderRadius='10px'
                  buttonColor={props => props.theme.colors.background}
                  buttonSize='80px'
                  onClick={() => deleteproduto(produto.id)}
                  type='button'>deletar</Button>
              </ProdutoSlideImgSt>
            </>
          );
        })}
      </MaisProdutosSlideSt>
    </div>
  );
};