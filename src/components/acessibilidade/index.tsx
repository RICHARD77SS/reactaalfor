import React from 'react';

import { AcessibilidadeSt } from './styles';
import { Title } from '../title';
import { Label } from '../label';
import { Input } from '../input'

export const Acessibilidade: React.FC = () => {
  return (
    <AcessibilidadeSt>
      <Title fontSize='1rem'>Acessibilidade</Title>
      <hr />
      <div className="">
        <Title fontSize='1rem'>Keyboard shortcuts</Title>
        <Label>General</Label>
        <Input inputSize='10px' type='checkbox' />
        <Title fontSize='.8rem' fontWeight='700'>Character Keys</Title>
        <Title fontSize='.8rem' fontWeight='400'>Enable GitHub shortcuts that don't use modifier keys in their activation.<br /> For example, the gn shortcut to navigate notifications,<br /> or question mark? to view context relevant shortcuts.<br /> Learn more about character key shortcuts.</Title>
        <Title fontSize='1rem' fontWeight='700'>Command palette</Title>
        <Title fontSize='.8rem' fontWeight='400'>Modify the shortcuts to trigger the Command Palette for<br /> the default search mode and the command mode.</Title>
      </div>
      <div className="">
        <Title fontSize='1rem'>Movimento</Title>
      </div>
      <div className="">
        <Title fontSize='1rem'>Keyboard shortcuts</Title>
      </div>

    </AcessibilidadeSt>
  )
}