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
  ProdutoSideSliderSt,
  ProdutoSlideImgSt,
} from './styles'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import DatalistParcela from '../datalistParcelas'

import { FaCreditCard } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'

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
        <ProdutoSlideImgSt>
          <img className='img2' src="https://www.imagensempng.com.br/wp-content/uploads/2020/11/004-5.png" alt='{productImageAlt}' />
          <Title>Placa de video 3080 ti</Title>
          <Title>R$ 20.000 ou 0,180973 bitcoin</Title>
          <Button buttonBorderRadius='10px'
            buttonColor={props => props.theme.colors.background}
            buttonSize='80px'
            onClick=''
            type='button'>Ver mais</Button>
        </ProdutoSlideImgSt>
        <ProdutoSlideImgSt>
          <img className='img2' src="https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3080-hof-12gb-gddr6x-lhr-dlss-38iom5md3bhx_128448.png" alt='{productImageAlt}' />
          <Title>Placa de video 3080 ti</Title>
          <Title>R$ 20.000 ou 0,180973 bitcoin</Title>
          <Button buttonBorderRadius='10px'
            buttonColor={props => props.theme.colors.background}
            buttonSize='80px'
            onClick=''
            type='button'>Ver mais</Button>
        </ProdutoSlideImgSt>
        <ProdutoSlideImgSt>
          <img className='img2' src="https://cdn.dooca.store/265/products/img10-1.png?v=1605022516&webp=0" alt='{productImageAlt}' />
          <Title>Placa de video 3080 ti</Title>
          <Title>R$ 20.000 ou 0,180973 bitcoin</Title>
          <Button buttonBorderRadius='10px'
            buttonColor={props => props.theme.colors.background}
            buttonSize='80px'
            onClick=''
            type='button'>Ver mais</Button>
        </ProdutoSlideImgSt>
        <ProdutoSlideImgSt>
          <img className='img2' src="https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3090-ex-gaming-pink-1-click-oc-24gb-gddr6x-384bit_104303.png" alt='{productImageAlt}' />
          <Title>Placa de video 3080 ti</Title>
          <Title>R$ 20.000 ou 0,180973 bitcoin</Title>
          <Button buttonBorderRadius='10px'
            buttonColor={props => props.theme.colors.background}
            buttonSize='80px'
            onClick=''
            type='button'>Ver mais</Button>
        </ProdutoSlideImgSt>
        <ProdutoSlideImgSt>
          <img className='img2' src="https://www.imagensempng.com.br/wp-content/uploads/2020/11/004-5.png" alt='{productImageAlt}' />
          <Title>Placa de video 3080 ti</Title>
          <Title>R$ 20.000 ou 0,180973 bitcoin</Title>
          <Button buttonBorderRadius='10px'
            buttonColor={props => props.theme.colors.background}
            buttonSize='80px'
            onClick=''
            type='button'>Ver mais</Button>
        </ProdutoSlideImgSt>
      </ProdutoSideSliderSt>
    </ProdutoContentSt>
  )
}