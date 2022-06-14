import React from 'react';

import { DivCenterStyle } from './style';
import DatalistState from '../datalistState';
import { Input } from '../input';
import { Label } from '../label';

const DivCenterState = () => {
  return (
    <DivCenterStyle>
      <Label>State</Label>
      <Input placeholder=' State' list='state' />
      <DatalistState />
    </DivCenterStyle>
  );
};

export default DivCenterState;