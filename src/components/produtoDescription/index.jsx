import React from 'react'

import { Title } from '../title'
import { Button } from '../button'
import { Input } from '../input'
import {
  ProdutoInfosSt,
  ProdutoDescSt,
  LojaInfoSt,
  PerguntasSt,
  PerguntasRespostasSt,
  AvaliacoesSt,
  AvaliacaoUsersInfoSt,
  UserSt,
  AvaliacaoUserSt
} from './styles'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineDown } from 'react-icons/ai'

export const ProdutoDescription = () => {

  return (
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
            <Input placeholder=' Perguntar' type='text' inputSize='200px' inputStyle='' /><Button size='100px'
              onClick=' '
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
          <Button size='200px'
            onClick=' '
            type='button'><AiOutlineDown />
          </Button>
        </PerguntasSt>

      </LojaInfoSt>
    </ProdutoInfosSt>
  )
}