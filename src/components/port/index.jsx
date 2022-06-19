import React from 'react';

import { PortStyle } from './style';
import { PortContent1, PortContent2, PortContent3, PortContent4 } from '../portContent';

export const Port1 = () => {
  return (
    <PortStyle>
      
      <PortContent1 />
    </PortStyle>
  )
}
export const Port2 = () => {
  return (
    <PortStyle>
      <PortContent2 />
    </PortStyle>
  )
}
export const Port3 = () => {
  return (
    <PortStyle>
      <PortContent3 />
    </PortStyle>
  )
}
export const Port4 = () => {
  return (
    <PortStyle>
      <PortContent4 />
    </PortStyle>
  )
}