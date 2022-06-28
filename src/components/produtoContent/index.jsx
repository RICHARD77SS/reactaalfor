import React from 'react';

import { Title } from '../title'
import { Button } from '../button'
import { Input } from '../input'
import {
  ProdutoContentSt,
  ProdutoRollImgSt,
  ProdutoConteinerImageSt,
  ProdutoAddFavSt,
  ProdutoBuySt,
  RollImagesSt,
  ProdutoSideSliderSt
} from './styles'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import DatalistParcela from '../datalistParcelas'

import { FaCreditCard } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { ProdutosEletronicos } from '../produtoSlide'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const ProdutoContent = () => {
  return (
    <ProdutoContentSt>
      <RollImagesSt>
        <ProdutoRollImgSt>
          <img className='img' src="https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png" alt='{productImageAlt}' />
        </ProdutoRollImgSt>
        <ProdutoRollImgSt>
          <img className='img' src="https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png" alt='{productImageAlt}' />
        </ProdutoRollImgSt>
        <ProdutoRollImgSt>
          <img className='img' src="https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png" alt='{productImageAlt}' />
        </ProdutoRollImgSt>
        <ProdutoRollImgSt>
          <img className='img' src="https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png" alt='{productImageAlt}' />
        </ProdutoRollImgSt>
        <ProdutoRollImgSt>
          <img className='img' src="https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png" alt='{productImageAlt}' />
        </ProdutoRollImgSt>
      </RollImagesSt>
      <ProdutoConteinerImageSt>
        <ProdutoAddFavSt>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </ProdutoAddFavSt>
        <img src="https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png" alt='{productImageAlt}' />
      </ProdutoConteinerImageSt>
      <ProdutoBuySt>
        <Title fontSize="1.5rem" fontColor={props => props.theme.colors.text}>Uma unidade de Bitcoin</Title>
        <Title fontSize="1.3rem" fontColor={props => props.theme.colors.text}>R$ 120.000,00 <Input placeholder=' Ver parcelas' type='list' inputSize='100px' inputStyle='' list='parcelas' />
          <DatalistParcela />
          <Title fontSize="1rem" fontColor={props => props.theme.colors.text}><a href=" ">variação de 1%</a> </Title>
        </Title>
        <Title fontSize="1rem" fontColor={props => props.theme.colors.text}> ou até 10x de 1200,00
          <Title fontSize="1rem" fontColor={props => props.theme.colors.text}><a href=" ">Ver meios de pagamento</a> <FaCreditCard /></Title>
        </Title>
        <Title fontSize=".8rem" fontColor={props => props.theme.colors.text}> Frete: <span>R$ 00,00</span><Title><GrLocation /> Selecione o endereço</Title>
          <Title fontSize=".8rem" fontColor={props => props.theme.colors.text}>Chegará: <span>Hoje</span><a href=" "> Saiba mais</a></Title>
        </Title>
        <Input placeholder=' Quantidade' type='list' inputSize='100px' inputStyle='' list='parcelas' />
        <DatalistParcela />
        <Button buttonBorderRadius='10px'
          buttonColor={props => props.theme.colors.background}
          buttonSize='100px'
          onClick=''
          type='button'>Buy</Button>
        <Button buttonBorderRadius='10px'
          buttonColor={props => props.theme.colors.background}
          buttonSize='100px'
          onClick=''
          type='button'
        >Add to cart</Button>
      </ProdutoBuySt>
      <ProdutoSideSliderSt>
        <ProdutosEletronicos />
      </ProdutoSideSliderSt>
    </ProdutoContentSt>
  )
}