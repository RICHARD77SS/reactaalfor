import React from 'react';

import { IcSt } from './styles'



interface Props {
  height: string;
  width: string;
  src: string;
  alt: string;
}

export const ImageConteiner: React.FC <Props> = ({
 width, height, src, alt }) =>( 
    <IcSt  width={width} height={height} >
      <img src={src} alt={alt} />
    </IcSt>

)