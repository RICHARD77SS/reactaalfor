import React from 'react';

import { BlockConteiner } from './styles';

import DivFlexCheck from '../checkBox';
import DivFlexRadio from '../divFlexRadio';
import DivFlexButton from '../divFlexButton';
import DivFlexLabel from '../divFlexArround';
import {DivCenterFilter} from '../divCenterFilter';
import DivCenterState from '../divCenterState';

const Filters = () => {
  return (
    <BlockConteiner>
      <DivCenterFilter />
      <DivFlexLabel />
      <DivFlexCheck />
      <DivCenterState />
      <DivFlexRadio />
      <DivFlexButton />
    </BlockConteiner>
  );
};

export default Filters