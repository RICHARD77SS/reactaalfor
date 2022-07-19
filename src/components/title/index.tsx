import React from 'react';

import { TitleSt } from './styles';

interface Props {
  children: any;
  fontSize: string;
  fontWeight?: string;
}

export const Title: React.FC <Props> = ({
  children='insira um filho',
  fontSize='1rem',
  fontWeight = '700',

}) => (
  <TitleSt
    fontWeight={fontWeight}
    fontSize={fontSize}>
    
    {children}
  </TitleSt >
)