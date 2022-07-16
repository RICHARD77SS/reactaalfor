import React from 'react';

import { PublicInfoSt, ButtonSt } from './styles'

import { Title } from '../title';
import { Button } from '../button';
import { Input } from '../input';
 
export const PerfilEndereco: React.FC = () => {

  return (
    <PublicInfoSt>
      <Title fontSize='1rem'>Cep</Title>
      <Input inputSize='200px' placeholder=' 0665445' type='text' />
      <Title fontSize='1rem'>Pais</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='.8rem'>Você pode removê-lo a qualquer momento.</Title>
      <Title fontSize='1rem'>Estado</Title>
      <Input inputSize='200px' placeholder=' São paulo' type='text' />
      <Title fontSize='1rem'>Cidade</Title>
      <Input inputSize='200px' placeholder=' sepana psu' type='text' />
      <Title fontSize='1rem'>Bairro</Title>
      <Input inputSize='200px' placeholder=' Input' type='text' />
      <Title fontSize='1rem'>Rua</Title>
      <Input inputSize='200px' placeholder=' rua rua rua rua' type='text' />
      <Title fontSize='1rem'>Number</Title>
      <Input inputSize='200px' placeholder=' rua rua rua rua' type='text' />
      <Title fontSize='.8rem'>Fake data Title texte text title whith here</Title>
      <ButtonSt>
        <Button>Ok</Button><Button>Cancel</Button>
      </ButtonSt>
    </PublicInfoSt>
  )
}