import React from 'react';
import { TxtSt } from './styles'


interface Props {
  className?: string;
  children: React.ReactNode;
  height: string;
  width: string;
}


export const TextConteiner: React.FC<Props> = ({ className,
  children,
  height,
  width }) => (
  <TxtSt
    height={height}
    width={width}
    className={className}>
    {children}
  </TxtSt>
);
