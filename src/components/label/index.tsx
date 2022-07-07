import React from 'react';

import { LabelStyle } from './styles';

interface Props {
  children: React.ReactNode; 
  className?: string;
}

export const Label: React.FC<Props> = ({
  children,
  className
} ) =>  (
    <LabelStyle className={className}>{children}</LabelStyle>
);

