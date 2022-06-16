import React from 'react';

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiStyledcomponents } from "react-icons/si";
import {
  MainConteinerStyle,
  MainTextConteinerStyle,
  MainIconsConteinerStyle,
  MainVIconsConteinerStyle,
  MainHIconsConteinerStyle,
  MainIconsStyle
} from './styles';
import{ MainTitle } from '../mainTitle'

const Main: React.FC = () => {

  return (
    <MainConteinerStyle>
      <MainTextConteinerStyle>
        <MainTitle fontSize='4rem' fontWeight={900} color='' >
          AllForTudoTrue
        </MainTitle>
        <MainTitle fontSize='1rem' fontWeight={500} color='#3200ff'>
          Tudo o que eu pensar, em um só lugar
        </MainTitle>
        <MainTitle fontSize='1.5rem' fontWeight={700} color='#00ff00'>
          Focus on the present
        </MainTitle>
      </MainTextConteinerStyle>
      <MainIconsConteinerStyle>
        <MainVIconsConteinerStyle>
          <MainIconsStyle>
            <FaHtml5 size="50" />
          </MainIconsStyle>
          <MainIconsStyle
          ><FaCss3Alt size="50" />
          </MainIconsStyle>
          <MainIconsStyle>
            <FaJsSquare size="50" />
          </MainIconsStyle>
        </MainVIconsConteinerStyle>
        <MainHIconsConteinerStyle>
          <MainIconsStyle>
            <FaGithub size="50" />
          </MainIconsStyle>
          <MainIconsStyle>
            <FaReact size="50" />
          </MainIconsStyle>
          <MainIconsStyle>
            <SiStyledcomponents size="50" />
          </MainIconsStyle>
        </MainHIconsConteinerStyle>
      </MainIconsConteinerStyle>
    </MainConteinerStyle>
  );
};

export default Main;