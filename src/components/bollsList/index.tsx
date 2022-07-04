import React from 'react'

import { BollsListStyle } from './stles'
import { Bolls } from '../bolls'


export const BollsList: React.FC = () => {
    return (
      <BollsListStyle>
        <Bolls />
        <Bolls />
        <Bolls />
        <Bolls />
        <Bolls />
        <Bolls />
      </BollsListStyle>
  )
}