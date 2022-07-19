import React from 'react';

import { PublicInfoSt, ButtonSt, ConteinerSt } from './styles'

import { Title } from '../title';
import { Button } from '../button';
import { Input } from '../input';
 
export const PerfilEndereco: React.FC = () => {

  return (
    <PublicInfoSt>
      <ConteinerSt>
        <Title fontSize='2rem'>Endereço 1</Title>

        <Title fontSize='.8rem'>Cep</Title>
        <Input inputSize='200px' placeholder=' 0665445' type='text' />
        <Title fontSize='.8rem'>Pais</Title>
        <Input inputSize='200px' placeholder=' Richard' type='text' />
        <Title fontSize='.8rem'>Você pode removê-lo a qualquer momento.</Title>
        <Title fontSize='.8rem'>Estado</Title>
        <Input inputSize='200px' placeholder=' São paulo' type='text' />
        <Title fontSize='.8rem'>Cidade</Title>
        <Input inputSize='200px' placeholder=' sepana psu' type='text' />
        <Title fontSize='.8rem'>Bairro</Title>
        <Input inputSize='200px' placeholder=' Input' type='text' />
        <Title fontSize='.8rem'>Rua</Title>
        <Input inputSize='200px' placeholder=' rua rua rua rua' type='text' />
        <Title fontSize='.8rem'>Number</Title>
        <Input inputSize='200px' placeholder=' rua rua rua rua' type='text' />
        <Title fontSize='.8rem'>Fake data Title texte text title whith here</Title>
        <ButtonSt>
          <Button>Ok</Button><Button>Cancel</Button>
        </ButtonSt>
      </ConteinerSt>
      <ConteinerSt>
        <Title fontSize='2rem'>Endereço 2</Title>
        <ButtonSt>
          <Button>Adicionar</Button>
        </ButtonSt>
      </ConteinerSt>
    </PublicInfoSt>
  )
}