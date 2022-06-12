import React from 'react';

import { DatalistStyle } from './styles'
import { OptionData} from '../optionData';

const DatalistState = () => {
  
  return (
    <DatalistStyle id='stateList'>
      <OptionData value='sp' />
      <OptionData value='ce' />
      <OptionData value='' />
    </DatalistStyle>
  );
};

export default DatalistState;