import React from 'react';


import { PublicInfoSt, ButtonSt } from './styles'

import { Title } from '../title';
import { Button } from '../button';
import { Input } from '../input';

 
export const PerfilRedes: React.FC = () => {

  return (
    <PublicInfoSt>
      <Title fontSize='1rem'>Instagram</Title>
      <Input inputSize='200px' placeholder=' 0665445' type='text' />
      <Title fontSize='1rem'>Facebook</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='1rem'>Twitter</Title>
      <Input inputSize='200px' placeholder=' 0665445' type='text' />
      <Title fontSize='1rem'>Twitch</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='1rem'>Tiktoc</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='1rem'>GitHub</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='1rem'>Youtube</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='1rem'>Telegram</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <Title fontSize='1rem'>Undefined</Title>
      <Input inputSize='200px' placeholder=' Richard' type='text' />
      <ButtonSt>
        <Button>Ok</Button><Button>Cancel</Button>
      </ButtonSt>
    </PublicInfoSt>
  )
}