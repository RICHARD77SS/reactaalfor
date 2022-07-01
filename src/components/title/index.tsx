import React from 'react';

import { TitleSt } from './styles';

interface Props {
  children: string;
  fontSize: string;
  fontWeight?: string;
}

export const Title: React.FC <Props> = ({
  children,
  fontSize,
  fontWeight
}) => (
  <TitleSt
    fontWeight={fontWeight}
    fontSize={fontSize} >
    {children}
  </TitleSt >
)