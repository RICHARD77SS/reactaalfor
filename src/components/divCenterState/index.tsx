import React from 'react';

import { DivCenterStyle } from './style';
import DatalistState from '../datalistState';
import InputStateList from '../inputStateList';
import { Label } from '../label';

const DivCenterState: React.FC = () => {
  return (
    <DivCenterStyle>
      <Label>State</Label>
      <InputStateList />
      <DatalistState />
    </DivCenterStyle>
  );
};

export default DivCenterState;