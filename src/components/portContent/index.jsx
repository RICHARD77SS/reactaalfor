import React from 'react';
import {GiMagicPortal} from 'react-icons/gi';
import { PortContentStyle } from './style';

export const PortContent = (

) => {
  return (
    <PortContentStyle>
      <div id='folder1-port' className='folderf-port folder1-port'>
        <GiMagicPortal size={50} />

      </div>
      <div id='folder2-port' className='folderf-port folder2-port'>
        <GiMagicPortal size={50} />

      </div>
      <div id='folder3-port' className='folderf-port folder3-port'>
        <GiMagicPortal size={50} />

      </div>
      <div id='folder4-port' className='folderf-port folder4-port'>
        <GiMagicPortal size={50} />

      </div>
    </PortContentStyle>
  )
}