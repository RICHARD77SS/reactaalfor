import React from 'react'

import { PageAdmSt, PageAdmNav } from './styles'
import { ACadastroProduto } from '../aCadastroProdutos';

export const AreaAdmin = () => {

  return (
    <PageAdmSt>
      <PageAdmNav>
        <ACadastroProduto />
      </PageAdmNav>
    </PageAdmSt>
  )
}