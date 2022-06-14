import React from 'react';
import { FaSearch, FaLanguage } from 'react-icons/fa';

import { DivFlexStyle } from './style';
import { Input } from '../input';
import { Datalist } from '../datalist';

const Search = () => {
  return (
    <DivFlexStyle> 
      <div className="flex">
        <FaSearch size={18} />
        <Input inputSize='150px'
          placeholder=' Search'
          type='search' />
      </div>
      <div className="flex">
        <FaLanguage size={24} />
        <Datalist id='lang' />
        <Input
          inputSize='60px'
          list='lang'
          placeholder=' Lang'
        />
      </div>
    </DivFlexStyle>
  );
};

export default Search;