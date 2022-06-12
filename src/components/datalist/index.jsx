import React from 'react';

import { DatalistStyle } from './styles'
import { OptionData } from '../optionData';

export const Datalist = ({
  id
}) => {
  
  return (
    <DatalistStyle id={id}>
      <OptionData value='pt-Br' />
      <OptionData value='ru' />
      <OptionData value='en' />
    </DatalistStyle>
  );
};
