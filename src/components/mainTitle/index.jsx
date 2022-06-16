
import React from 'react';

import { TitleStyle } from './styles';

export const MainTitle = ({
  children,
  fontSize,
  fontWeight,
  color

  
}) => {
  return (
    <TitleStyle
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}>{children}
    </TitleStyle>
  );
};
