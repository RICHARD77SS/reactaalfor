import React from 'react';
import { FaSearch, FaLanguage } from 'react-icons/fa';

import { DivFlexStyle } from './style';
import { Input } from '../input';
import { Datalist } from '../datalist';
import { Label} from '../label';

export const Search: React.FC = () => (
  <DivFlexStyle>
    <DivFlexStyle>
      <Input inputSize='150px'
        placeholder=' Search'
        type='search' />
      <Label className='label'><FaSearch size='20' /></Label>
    </DivFlexStyle>
    <DivFlexStyle>
      <Datalist id='lang' />
      <Input
        type='list'
        inputSize='75px'
        list='lang'
        placeholder=' Lang' />
      <Label className='label'><FaLanguage size='30' /></Label>
    </DivFlexStyle>
  </DivFlexStyle>
);