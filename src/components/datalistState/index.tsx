import React from 'react';

import { DatalistLangStyle } from './styles'
import OptionDataState from '../optionDataState';

const DatalistState: React.FC = () => {
  
  return (
    <DatalistLangStyle id='stateList'>
      <OptionDataState/>
      <OptionDataState/>
      <OptionDataState/>
      <OptionDataState/>
    </DatalistLangStyle>
  );
};

export default DatalistState;