import React from 'react';
import { Input } from './styles';

import InputList from '../inputList';
import DatalistLang from '../datalistLang';


const InputLang: React.FC = () => {

  return (
    <Input>
      <InputList />
      <DatalistLang/>

    </Input>
  );
};

export default InputLang;