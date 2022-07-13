import React from 'react';

import { FaSearch } from 'react-icons/fa'

import { DivFlexStyle } from './style';
import { Input } from '../input';
import { Button } from '../button';

export const Search: React.FC = () => (
  <DivFlexStyle>
    <DivFlexStyle>
      <Input inputSize='50px'
        placeholder='Buscar'
        type='search' /><Button width='30px'><FaSearch /></Button>
    </DivFlexStyle>
  </DivFlexStyle>
);