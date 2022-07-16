import React from 'react';

import { TriangleSt } from './styles';

interface Props {
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  color?: string;
  children?: string;
  width?: string;
}
export const Triangle: React.FC<Props> = ({
  left='20px',
  right='20px',
  top='20px',
  bottom= '20px',
  color= '#000',
  children,
  width='20px'
}) => {
  return (
    <TriangleSt
      left={left}
      right={right}
      bottom={bottom}
      top={top}
      width={width}
      color={color}>
      {children}
    </TriangleSt>
  )
}