import React from 'react';

import { IcSt } from './styles'

export const ImageConteiner = ({
  icWidth,
  icHeight,
  icBorderRad,
  icImage
}) => {
  
  return (
    <IcSt
      icWidth={icWidth}
      icHeight={icHeight}
      icBorderRad={icBorderRad}
      icImage={icImage}>
    </IcSt>
  )
}