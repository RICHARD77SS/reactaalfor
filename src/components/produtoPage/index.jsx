import React from 'react';
import {
  ProdutoPageContainerSt,
  ProdutoContentSt,
  ProdutoRollImgSt,
  ProdutoConteinerImageSt,
  ProdutoAddFavSt,
  ProdutoBuySt,
  ProdutoInfosSt,
  ProdutoDescSt,
  LojaInfoSt,
  PerguntasSt,
  PerguntasRespostasSt,
  MaisProdutosSt,
  AvaliacoesSt,
  AvaliacaoUsersInfoSt,
  UserSt,
  AvaliacaoUserSt,
  RollImagesSt,
  ProdutoSideSliderSt,
  ProdutoSlideImgSt

} from './styles'
import { Title } from '../title'
import { Button } from '../button'
import { Input } from '../input'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import DatalistParcela from  '../datalistParcelas'

import { FaCreditCard, FaUserCircle } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineDown } from 'react-icons/ai'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function BasicRating() {
  const [value, setValue] = React.useState(4)
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}

export const ProdutoPage = (
  // produto,
  // preco,
  // parcela,
  // productImageSrc,
  // productImageAlt,
  // productDescription,
  // frete,
  // prasoEntrega


) => {
  
  return (
    <ProdutoPageContainerSt>
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
      <ProdutoInfosSt>
        <ProdutoDescSt>
          <details>
            <summary>Descrição do produto</summary>
            <Title fontSize=".8rem" fontColor={props => props.theme.colors.text}>O bitcoin é uma moeda virtual a primeira criada no mundo <br />
              e pode ser usado para a compra de serviços, produtos e quaisquer outros itens <br />
              em estabelecimentos que aceitem ser pagos com ele.</Title>
            <br />
            <Title fontSize=".8rem" fontColor={props => props.theme.colors.text}> O bitcoin é a primeira moeda descentralizada do mundo.<br /> Isso significa que,
              além de não ser regulado por governos, bancos ou empresas,<br /> é possível comprar, enviar
              e receber bitcoins sem nenhum intermediário,<br /> como bancos ou emissores de cartão de crédito. </Title>
            <summary>Descriçao tecnica:</summary>
            <Title fontSize=".8rem" fontColor={props => props.theme.colors.text}>
              Marca	  ‎MSI<br />
              Fabricante	  ‎MSI COMPUTER<br />
              Altura do produto	  ‎5.5 polegadas<br />
              Largura do produto	  ‎2.4 polegadas<br />
              Resolução 	‎7680 x 4320<br />
              Velocidade do relógio de memória  	‎1860<br />
              Modelo de placa de vídeo  	‎NVIDIA GeForce RTX 3090 Ti<br />
              Marca do chipset de vídeo	  ‎NVIDIA<br />
              Tipo de memória de vídeo  	‎GDDR6X<br />
              Memória de vídeo  	‎24 GB<br />
              Interface da placa de vídeo	  ‎PCI-Express x16<br />
              Número de unidades	  ‎1<br />
              Peso do produto	  ‎2.27 kg<br />
              Dimensões do produto	  ‎33.53 x 6.1 x 13.97 cm; 2.27 Quilogramas<br />
              Número do modelo	  ‎MSI GeForce RTX 3090Ti SUPRIM X 24G<br />
              Funciona a bateria ou pilha?	  ‎Não<br />
              EAN  	‎0824142280324</Title>
          </details>
        </ProdutoDescSt>
        <LojaInfoSt>
          <Title fontSize="1.5rem" fontColor={props => props.theme.colors.text}>Avaliação do produto</Title>
          <Title fontSize=".8rem" fontColor={props => props.theme.colors.text}>
            Dimensões do pacote:	43.5 x 28.8 x 13.4 centímetros<br />
            ASIN:  	B09R9JPVK9<br />
            Disponível para compra desde: 	28 fevereiro 2022<br />
          </Title>
          <Rating name="read-only" value={5} readOnly />
          <details>
            <summary>5 avaliações de clientes</summary>
            <AvaliacoesSt>
              <AvaliacaoUsersInfoSt>
                <UserSt>
                  <FaUserCircle size='20' /><Title>Username.user0</Title></UserSt>
                <AvaliacaoUserSt>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography component="legend">I like for</Typography>
                </AvaliacaoUserSt>
                <Title>Avaliaçao vinda de LOCATION em DATE</Title>
                <a href=' '>Compra verificada</a>
              </AvaliacaoUsersInfoSt>
              <AvaliacaoUsersInfoSt>
                <UserSt>
                  <FaUserCircle size='20' /><Title>Username.user1</Title></UserSt>
                <AvaliacaoUserSt>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography component="legend">I like for</Typography>
                </AvaliacaoUserSt>
                <Title>Avaliaçao vinda de LOCATION em DATE</Title>
                <a href=' '>Compra verificada</a>
              </AvaliacaoUsersInfoSt>
              <AvaliacaoUsersInfoSt>
                <UserSt>
                  <FaUserCircle size='20' /><Title>Username.user2</Title></UserSt>
                <AvaliacaoUserSt>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography component="legend">I like for</Typography>
                </AvaliacaoUserSt>
                <Title>Avaliaçao vinda de LOCATION em DATE</Title>
                <a href=' '>Compra verificada</a>
              </AvaliacaoUsersInfoSt>
              <AvaliacaoUsersInfoSt>
                <UserSt>
                  <FaUserCircle size='20' /><Title>Username.user3</Title></UserSt>
                <AvaliacaoUserSt>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography component="legend">I like for</Typography>
                </AvaliacaoUserSt>
                <Title>Avaliaçao vinda de LOCATION em DATE</Title>
                <a href=' '>Compra verificada</a>
              </AvaliacaoUsersInfoSt>
              <Button buttonBorderRadius='10px'
                buttonColor={props => props.theme.colors.background}
                buttonSize='200px'
                onClick=''
                type='button'><AiOutlineDown /></Button>
            </AvaliacoesSt>
          </details>
          <PerguntasSt>
            <div className="flex">
              <Input placeholder=' Perguntar' type='text' inputSize='200px' inputStyle='' /><Button buttonBorderRadius='10px'
                buttonColor={props => props.theme.colors.background}
                buttonSize='100px'
                onClick=''
                type='button'>Perguntar</Button>

            </div>
            <PerguntasRespostasSt>
              <details>
                <summary>Perguntas anteriores</summary>
                <Title>Quantos w? </Title>
                <Title fontSize=".7rem" fontColor='#be7676'>Olá NAIARAALVESPINHEIRO, que bom te ver por aqui! Agradeço seu contato! Esse modelo é de 30W de potência, ok? (: Aproveite a oferta e garanta já o seu! Ah, e a entrega é full, chega voando! - Bianca V- 123 COMPROU22/06/2022</Title>
                <Title> No caso vc quer dizer colocar num cômodo aí limpar ele e programar de novo pra por no outro isso?</Title>
                <Title fontSize=".7rem" fontColor='#be7676'> Oi MAITEFOLLMANN, tudo bem? ^-^ Exatamente! (: Aproveite a oferta e garanta já o seu! Ah, e a entrega é full, chega voando! - Júlio F - 123 Comprou!21/06/2022</Title>
                <Title>Essa potencia de 30w é boa? Limpa de noa uma casa com 7 cômodos?
                </Title>
                <Title fontSize=".7rem" fontColor='#be7676'> Oi MAITEFOLLMANN, fico feliz de te ter por aqui! Simm, mas a limpeza dele o ideal é que seje preparado cômodo por cômodo pra que ele trabalhe da melhor forma! (: Aproveite a oferta e garanta já o seu! Ah, e a entrega é full, chega voando! - Júlio F - 123 Comprou!21/06/2022</Title>
                <Title>Quantos watts de potência ?</Title>
                <Title fontSize=".7rem" fontColor='#be7676'> Oi KACIOHACL, fico feliz de te ter por aqui! ^-^ Esse modelo é de 30W de potência, ok? (: Aproveite a oferta e garanta já o seu! Ah, e a entrega é full, chega voando! - Júlio F - 123 Comprou!21/06/2022</Title>
              </details>

            </PerguntasRespostasSt>
            <Button buttonBorderRadius='10px'
              buttonColor={props => props.theme.colors.background}
              buttonSize='200px'
              onClick=''
              type='button'><AiOutlineDown />
            </Button>
          </PerguntasSt>
        </LojaInfoSt>
      </ProdutoInfosSt>
      <MaisProdutosSt>
      </MaisProdutosSt>
    </ProdutoPageContainerSt>
  )
}