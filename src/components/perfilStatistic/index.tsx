import React from 'react';

import { UserStatisticSt, UgraphSt, VerticalDataSt, BolonSt, Bolon3St, OptionsSt, ConteinerSt } from './styles'

import { Triangle } from '../triangle';
import { Title } from '../title';
import { UserData } from '../userData'
import { PerfilUser } from '../perfilUser'
 
export const PerfilStatistic: React.FC = () => {
  return (
    <UserStatisticSt>
      <PerfilUser />
      <ConteinerSt>
        <UgraphSt>
          <UserData height='200px'>HTML</UserData>
          <UserData height='100px'>CSS</UserData>
          <UserData height='150px'>PHP</UserData>
          <UserData height='180px'>SQL</UserData>
          <UserData height='30px' >JS</UserData>
          <UserData height='20px' >TS</UserData>

          <VerticalDataSt>
            <Title fontSize='.9rem'>200</Title>
            <Title fontSize='.9rem'>150</Title>
            <Title fontSize='.9rem'>100</Title>
            <Title fontSize='.9rem'>50</Title>
            <Title fontSize='.9rem'>0</Title>
          </VerticalDataSt>

        </UgraphSt>
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
      </ConteinerSt>
    </UserStatisticSt>
  )
}