import React from 'react';

import { Title } from '../title';
import { Button } from '../button';


import { PlansSt, PlanSt } from './styles';

export const Plans: React.FC = () => (
  <PlansSt>
    <PlanSt>
      <Title fontSize='1rem'>Card</Title>
      <Title fontSize='.7rem'>info mini desc littkle fotk card juan</Title>
      <Title fontSize='1rem'>Card midght</Title>
      <Title fontSize='.7rem'>Até 12x de:</Title>
      <Title fontSize='1.5rem'>R$: 1.080</Title>
      <Title fontSize='.7rem'>Àvista R$: 10.800</Title>
      <Button>Mais infos</Button>
    </PlanSt>
  </PlansSt>
)