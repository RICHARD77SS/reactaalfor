import React from 'react';

import { Title } from '../title';
import { Button } from '../button';
import { FaPenSquare, FaUserAstronaut } from 'react-icons/fa'
import { PerfilSt, PerfilInfoSt, PerfilContenSt, UserSt, UserInfoSt, ListSt, UserStatisticSt, UgraphSt, UgraphNumSt, VerticalDataSt, PerfilSidebarSt, UserHistory, OptionsSt, OptionsdSt } from './styles';
import { UserData } from '../userData'


export const Perfil: React.FC = () => {

  return (
    <PerfilSt>
      <PerfilInfoSt>
        <PerfilSidebarSt>
          <UserInfoSt>
            <UserSt>
              <FaUserAstronaut size='80' /><Button
                border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
            </UserSt>
            <ListSt>
              <Title fontSize='1rem'>Username.User</Title>
              <Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
            </ListSt>
            <ListSt>
              <Title fontSize='1rem'>Name</Title><Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
            </ListSt>
            <ListSt>
              <Title fontSize='1rem'>Last name</Title><Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
            </ListSt>
            <ListSt>
              <Title fontSize='1rem'>Email.user@prover.com</Title><Button border='none' height='fit-content' radius='none'><FaPenSquare /></Button>
            </ListSt>
          </UserInfoSt>
          <OptionsSt>
            <Button
              border='none'
              background='none'
              width='100%'>Config</Button> 
            <Button
              border='none'
              background='none'
              width='100%'>Config</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Config</Button>

          </OptionsSt>
        </PerfilSidebarSt>
        <OptionsdSt>
          <UserStatisticSt>
            <UgraphSt>
              <UserData height='200px'>HTML</UserData>
              <UserData height='100px'>CSS</UserData>
              <UserData height='150px'>PHP</UserData>
              <UserData height='180px'>SQL</UserData>
              <UserData height='30px' >JS</UserData>
              <UserData height='20px' >TS</UserData>
            </UgraphSt>
            <UgraphNumSt>
              <VerticalDataSt>
                <Title fontSize='.9rem'>200</Title>
                <Title fontSize='.9rem'>150</Title>
                <Title fontSize='.9rem'>100</Title>
                <Title fontSize='.9rem'>50</Title>
                <Title fontSize='.9rem'>0</Title>
              </VerticalDataSt>
            </UgraphNumSt>
          </UserStatisticSt>
          
        </OptionsdSt>
      </PerfilInfoSt>
      <PerfilContenSt>
        <UserHistory>
          history
        </UserHistory>
      </PerfilContenSt>
    </PerfilSt>
  );
};