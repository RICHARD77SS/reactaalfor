import React from 'react';

import { TitleStyle } from './styles';

export const Title = ({
  children,
  fontSize,
  fontColor
}) => {
  return (
    <TitleStyle fontSize={fontSize} fontColor={fontColor}>{children}</TitleStyle >
  )
}