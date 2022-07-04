import React from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { BollsStyle, Bolls2Style } from './stles'

export const Bolls: React.FC = () => {
    return (
      <BollsStyle>
        <Bolls2Style>
          <BsCurrencyBitcoin />
        </Bolls2Style>
      </BollsStyle>
  )
}