import React from 'react';

import { DatalistStyle } from './styles'
import { OptionData } from '../optionData';

const DatalistParcela = () => {

  return (
    <DatalistStyle id='parcelas'>
      <OptionData value='1x' />
      <OptionData value='2x' />
      <OptionData value='4x' />
      <OptionData value='5x' />
      <OptionData value='6x' />
      <OptionData value='7x' />
      <OptionData value='8x' />
      <OptionData value='9x' />
      <OptionData value='10x' />
      <OptionData value='11x' />
      <OptionData value='12x' />
    </DatalistStyle>
  );
};

export default DatalistParcela;
