import React from 'react';

import { AparenciaSt } from './styles';

import { Title } from '../title';
import { Input } from '../input';

export const Aparencia: React.FC = () => {
  return (
    <AparenciaSt>
      <div className="ajustedeaparencia">
        <Title fontSize='1rem'>Ajuste de Aparencia</Title>
        <div className="con">
          <Title fontSize='1rem'>Tamanho da fonte</Title>
          <Input inputSize='100px' placeholder='Font Size' type='text' />
        </div>
        <div className="con">
          <Title fontSize='1rem'>Tema</Title>
          <Input inputSize='100px' placeholder='Tema' type='text' />
        </div>
        <div className="con">
          <Title fontSize='1rem'>Fonte</Title>
          <Input inputSize='100px' placeholder='Font' type='text' />
        </div>
      </div>
    </AparenciaSt>
  )
}