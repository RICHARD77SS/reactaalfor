import React from 'react';

import { DivCenterStyle } from './style';
import { Input } from '../input';

const DivCenterRange = () => {
  return (
    <DivCenterStyle>
      <Input type='range' />
    </DivCenterStyle>
  );
};

export default DivCenterRange;