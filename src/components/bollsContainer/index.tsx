import React from 'react'

import { BollsContainerStyle } from './stles'
import { BollsList } from '../bollsList'

export const BollsContainer: React.FC = () => {
    return (
      <BollsContainerStyle>
        <BollsList />
      </BollsContainerStyle>
  )
}