import React from 'react';

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

import { MainConteinerStyle } from './styles';

const Main: React.FC = () => {

  return (
    <MainConteinerStyle>
      <div className="MainText">
        <h1>AallForTudoTrue</h1>
        <p>Tudo o que eu pensar, em um só lugar</p>
        <span>Focus on the present</span>
      </div>
      <div className="MainImages">
        <div className="MiniImageMainConteiner">
          <div className="MiniImage"><FaReact /></div>
        </div>
        <div className="MiniImageMainConteiner">
          <div className="MiniImage"><FaHtml5 /></div>
        </div>
        <div className="MiniImageMainConteiner">
          <div className="MiniImage"><FaCss3Alt /></div>
        </div>
        <div className="MiniImageMainConteiner">
          <div className="MiniImage"><FaJsSquare /></div>
        </div>
      </div>
    </MainConteinerStyle>
  );
};

export default Main;