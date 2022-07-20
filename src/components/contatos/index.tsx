import React from 'react';

import { FaUserCircle, FaViber } from 'react-icons/fa'
import { ContatosSt, ListSt, ContatoSt } from './styles';
import { Title } from '../title';
import { Button } from '../button';

export const Contatos: React.FC = () => {
  return (
    <ContatosSt>
      <ListSt>
        <Title fontSize='2rem' >Contatos</Title>
        <ContatoSt><FaUserCircle /><Title fontSize='1rem' >Nikas Nikas</Title><Button width='60px'>Chat <FaViber size='15' /></Button></ContatoSt>
        <ContatoSt><FaUserCircle /><Title fontSize='1rem' >Finds Find</Title><Button width='60px'>Chat <FaViber size='15' /></Button></ContatoSt>
        <ContatoSt><FaUserCircle /><Title fontSize='1rem' >Finds Finds</Title><Button width='60px'>Chat <FaViber size='15' /></Button></ContatoSt>
        <ContatoSt><FaUserCircle /><Title fontSize='1rem' >Finds Finds</Title><Button width='60px'>Chat <FaViber size='15' /></Button></ContatoSt>
        <ContatoSt><FaUserCircle /><Title fontSize='1rem' >Finds Finds</Title><Button width='60px'>Chat <FaViber size='15' /></Button></ContatoSt>
        <ContatoSt><FaUserCircle /><Title fontSize='1rem' >Finds Finds</Title><Button width='60px'>Chat <FaViber size='15' /></Button></ContatoSt>
        <ContatoSt><FaUserCircle /><Title fontSize='1rem' >Finds Finds</Title><Button width='60px'>Chat <FaViber size='15' /></Button></ContatoSt>
      </ListSt>
      <div className="chat">

      </div>
    </ContatosSt >
  )
}