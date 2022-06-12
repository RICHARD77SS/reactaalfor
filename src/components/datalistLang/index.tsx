import React from 'react';

import { DatalistLangStyle } from './styles'
import OptionDataLang from '../optionDataLang';

const DatalistLang: React.FC = () => {
  
  return (
    <DatalistLangStyle id='lang'>
      <OptionDataLang />
      <OptionDataLang/>
      <OptionDataLang/>
      <OptionDataLang/>
    </DatalistLangStyle>
  );
};

export default DatalistLang;