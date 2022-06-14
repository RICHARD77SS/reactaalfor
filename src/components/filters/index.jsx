import React from 'react';

import { BlockConteiner } from './styles';

import DivFlexCheck from '../divFlexCheck';
import DivFlexRadio from '../divFlexRadio';
import DivFlexButton from '../divFlexButton';
import DivCenterRange from '../divCenterRange';
import DivFlexLabel from '../divFlexArround';
import {DivCenterFilter} from '../divCenterFilter';
import DivCenterState from '../divCenterState';

const Filters = () => {
  return (
    <BlockConteiner>
      <DivCenterFilter />
      <DivCenterRange />
      <DivFlexLabel />
      <DivFlexCheck />
      <DivCenterState />
      <DivFlexRadio />
      <DivFlexButton />
    </BlockConteiner>
  );
};

export default Filters