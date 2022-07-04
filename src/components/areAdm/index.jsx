import React from 'react'

import { PageAdmSt, PageAdmNav } from './styles'
import { ACadastroProduto } from '../cadastroDeProdutos';

export const AreaAdmin = () => {

  return (
    <PageAdmSt>
      <PageAdmNav>
        <div className="CadRemoveProd-St">
          <ACadastroProduto />
        </div>
        <div className="DadosPaginas-St">
          
        </div>
        <div className="DadosPaginas-St">

        </div>
      </PageAdmNav>
    </PageAdmSt>
  )
}