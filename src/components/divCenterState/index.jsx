import React from 'react';

import { DivCenterStyle } from './style';
import DatalistState from '../datalistState';
import {InputList} from '../inputList';
import { Label } from '../label';

const DivCenterState = () => {
  return (
    <DivCenterStyle>
      <Label>State</Label>
      <InputList placeholder='State' list='state' />
      <DatalistState />
    </DivCenterStyle>
  );
};

export default DivCenterState;