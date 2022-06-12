import React from 'react';
import { Input } from './styles';

import{ InputList} from '../inputList';
import { Datalist } from '../datalist';


const InputLang = () => {

  return (
    <Input>
      <InputList placeholder=' Lang' />
      <Datalist id='lang'/>

    </Input>
  );
};

export default InputLang;