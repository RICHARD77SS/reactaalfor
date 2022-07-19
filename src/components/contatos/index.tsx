import React from 'react';

import { ContatosSt } from './styles';
import { Title } from '../title';

export const Contatos: React.FC = () => {
  return (
    <ContatosSt>
      <div className="listadecontatos">
        <ul>
          <li>Contato 1</li>
          <li>Contato 2</li>
          <li>Contato 3</li>
          <li>Contato 4</li>
        </ul>
      </div>
      <div className="chat">

      </div>
    </ContatosSt>
  )
}