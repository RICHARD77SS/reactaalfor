import React from 'react';
import { FaSearch, FaLanguage } from 'react-icons/fa';

import { DivFlexStyle } from './style';
import { Input } from '../input';
import { Datalist } from '../datalist';
import { Label} from '../label';

const Search = () => {
  return (
    <DivFlexStyle> 
      <DivFlexStyle>
        <Input inputSize='150px'
          placeholder=' Search'
          type='search' />
        <Label><FaSearch size='20' /></Label>
      </DivFlexStyle>
      <DivFlexStyle>
        <Datalist id='lang' />
        <Input
          inputSize='60px'
          list='lang'
          placeholder=' Lang'/>
        <Label><FaLanguage size='30' /></Label>
      </DivFlexStyle>
    </DivFlexStyle>
  );
};

export default Search;