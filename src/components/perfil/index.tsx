import React from 'react';

import { Title } from '../title';
import { Button } from '../button';
import { Triangle } from '../triangle';
import { PerfilUser } from '../perfilUser'
import { PerfilEndereco } from '../perfilEndereco'
import { PerfilInfo } from '../perfilInfo'

import { PerfilSt, PerfilInfoSt, PerfilContenSt, UserStatisticSt, UgraphSt, UgraphNumSt, VerticalDataSt, PerfilSidebarSt, UserHistory, OptionsSt, OptionsdSt, BolonSt, Bolon3St, PublicSt } from './styles';
import { UserData } from '../userData'


export const Perfil: React.FC = () => {

  return (
    <PerfilSt>
      <PerfilInfoSt>
        <PerfilSidebarSt>
          <PerfilUser />
          <OptionsSt>
            <Button
              border='none'
              background='none'
              width='100%'>Perfil</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Endereço</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Redes/Links</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Carrinho</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Contatos</Button>
          </OptionsSt>
          <OptionsSt>
            <Button
              border='none'
              background='none'
              width='100%'>Conquistas</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Habilidades</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Empresas</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Sites</Button>
          </OptionsSt>
          <OptionsSt>
            <Button
              border='none'
              background='none'
              width='100%'>Aparencia</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Acessibilidade</Button>
            <Button
              border='none'
              background='none'
              width='100%'>Segurança</Button>
          </OptionsSt>
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
            <OptionsSt>
              <BolonSt>

                <Bolon3St>
                  <Triangle left='30px' right='20px' bottom='10px' color="#fff"></Triangle>
                </Bolon3St>
                <Bolon3St>
                  <UserData height='10px' color='#fff' ></UserData>
                </Bolon3St>
                <Bolon3St>
                  <Triangle left='30px' bottom='30px' color="#fff"></Triangle>
                  <UserData height='10px' color='#fff' ></UserData>
                </Bolon3St>
                <Bolon3St>
                  <Triangle left='10px' right='20px' color="#fff"></Triangle>
                  <UserData height='40px' color='#fff' ></UserData>
                </Bolon3St>
                <Bolon3St>
                  <Triangle left='0px' right='30px' bottom='10px' color="#fff"></Triangle>
                  <UserData height='30px' color='#fff' ></UserData>
                </Bolon3St>
                <Bolon3St>
                  <Triangle
                    left='20px'
                    right='20px'
                    bottom='50px'
                    color="#fff"></Triangle>
                  <UserData height='30px' color='#fff' ></UserData>
                </Bolon3St>
                <Bolon3St>
                  <Triangle left='20px' right='10px' bottom='35px' color="#fff"></Triangle>
                  <UserData height='55px' color='#fff' ></UserData>
                </Bolon3St>
                <Bolon3St>
                  <Triangle left='20px' right='10px' bottom='75px' color="#fff"></Triangle>
                  <UserData height='55px' color='#fff' ></UserData>
                </Bolon3St>
                <VerticalDataSt>
                  <Title fontSize='.5rem'>20000</Title>
                  <Title fontSize='.5rem'>15000</Title>
                  <Title fontSize='.5rem'>10000</Title>
                  <Title fontSize='.5rem'>5000</Title>
                  <Title fontSize='.5rem'>1000</Title>
                  <Title fontSize='.5rem'>500</Title>
                  <Title fontSize='.5rem'>100</Title>
                </VerticalDataSt>
              </BolonSt>
            </OptionsSt>
          </UserStatisticSt>
          <PublicSt>
            <PerfilInfo />
            <PerfilEndereco />

          </PublicSt>

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