import React from 'react';


import { PublicInfoSt, ButtonSt } from './styles'

import { Title } from '../title';
import { Button } from '../button';
import { Input } from '../input';

 
export const PerfilInfo: React.FC = () => {

  return (
    <PublicInfoSt>
      <Title fontSize='1rem'>Nome</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='.8rem'>Você pode removê-lo a qualquer momento.</Title>
      <Title fontSize='1rem'>Email</Title>
      <Input inputSize='200px' placeholder=' User@hotmail.com' type='text' />
      <Title fontSize='1rem'>Email comercial</Title>
      <Input inputSize='200px' placeholder=' User@hotmail.com' type='text' />
      <Title fontSize='1rem'>Cell</Title>
      <Input inputSize='200px' placeholder=' (11)998363166' type='text' />
      <Title fontSize='1rem'>Tell</Title>
      <Input inputSize='200px' placeholder=' (11)44444444' type='text' />
      <Title fontSize='1rem'>Sexo</Title>
      <Input inputSize='200px' placeholder=' masculino' type='text' />
      <Title fontSize='.8rem'>Title texte text title whith here</Title>
      <ButtonSt>
        <Button>Ok</Button><Button>Cancel</Button>
      </ButtonSt>
    </PublicInfoSt>
  )
}