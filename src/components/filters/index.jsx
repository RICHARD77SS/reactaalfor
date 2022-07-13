import React from 'react';

import { BlockConteiner } from './styles';
import DivFlexCheck from '../checkBox';
import DivFlexButton from '../divFlexButton';
import {DivCenterFilter} from '../divCenterFilter';
import DivCenterState from '../divCenterState';

const Filters = () => {
  return (
    <BlockConteiner>
      <DivCenterFilter />
      <DivFlexCheck />
      <DivCenterState />
      <DivFlexButton />
    </BlockConteiner>
  );
};

export default Filters