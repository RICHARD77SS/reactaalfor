import React from 'react';

import { DivCenterStyle } from './style';
import DatalistState from '../datalistState';
import { Input } from '../input';
import { Label } from '../label';

const DivCenterState: React.FC = () => {
  return (
    <DivCenterStyle>
      <Label className='label'>State</Label>
      <Input type='list' inputSize='100px' placeholder=' State' list='state' />
      <DatalistState />
    </DivCenterStyle>
  );
};

export default DivCenterState;