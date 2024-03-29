import React from 'react';

import {
  ProdContentSt,
  ProdListSt,
  FormCadastroSt,
  CardImgContSt,
  CardTopSt,
  CardBottomSt
} from './styles';
import { Title } from '../title';
import { Button } from '../button';
import { Input } from '../input';
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
      window.location.reload(true)
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
  }, [eletronicproductsCollectionRef]);



  async function deleteproduto(id) {
    const produtoDoc = doc(db, "eletronicproducts", id);
    await deleteDoc(produtoDoc);
    window.location.reload(true)
  }

  return (
    <FormCadastroSt>
      <Input
        type="text"
        placeholder=" Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" Preço do produto"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" Descrição do produto"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" Avaliaçao do produto"
        value={avaliation}
        onChange={(e) => setavaliation(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" Quantidade de produtos"
        value={inventory}
        onChange={(e) => setinventory(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" Comentarios"
        value={comments}
        onChange={(e) => setcomments(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" image"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button
        size='100px'
        onClick={criarDado}>Criar dado</Button>

      <ProdListSt>
        {eletronicproducts.map((produto) => {
          return (
              <ProdContentSt>
                <CardTopSt>
                  <CardImgContSt>
                    <img className='imgc' src={produto.image} alt="" />
                  </CardImgContSt>
                  <CardBottomSt>
                    <Title>{produto.name}</Title>
                    <Title>R$ {produto.price}</Title>
                    <Button
                      size='fit-content'
                      onClick={() => deleteproduto(produto.id)}
                      type='button'>Buy</Button>
                    <Title fontSize='.6rem' >Estoque: {produto.inventory}</Title>
                  </CardBottomSt>
                </CardTopSt>
                <Title fontSize='.8rem'>{produto.description}</Title>
                <details>
                  <summary>Comments</summary>
                  <Title fontSize='.6rem'>{produto.comments}</Title>
                </details>
                <Rating size='small' name="read-only" value={produto.avaliation} readOnly />
                <Button
                  size='80px'
                  onClick={() => deleteproduto(produto.id)}
                type='button'>Deletar</Button>
              </ProdContentSt>
          );
        })}
      </ProdListSt>
    </FormCadastroSt>
  );
};