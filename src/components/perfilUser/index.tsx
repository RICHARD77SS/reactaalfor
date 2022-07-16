import React from 'react';

import { FaPenSquare, FaUserAstronaut } from 'react-icons/fa'
import { UserInfoSt, ListSt, UserSt } from './styles'

import { Title } from '../title';
import { Button } from '../button';

 
export const PerfilUser: React.FC = () => {
  const user = 'Username'
  const name = 'name'
  const lastName = 'lastname'
  const userEmail = 'emailuser'
  return (
    <UserInfoSt>
      <UserSt>
        <FaUserAstronaut size='80' /><Button
          border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
      </UserSt>
      <ListSt>
        <Title fontSize='1rem' >{user}</Title>
        <Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
      </ListSt>
      <ListSt>
        <Title fontSize='1rem'>{name}</Title><Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
      </ListSt>
      <ListSt>
        <Title fontSize='1rem'>{lastName}</Title><Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
      </ListSt>
      <ListSt>
        <Title fontSize='1rem'>{userEmail}</Title><Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
      </ListSt>
    </UserInfoSt>
  )
}