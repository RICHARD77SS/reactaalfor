import React from 'react';


import { HomeConteinerStyle } from './styles';
import Main from '../main';

const Home: React.FC = () => {
  return (
    <HomeConteinerStyle>
      <Main />
      <div className="home">
        <div className="baner">
        </div>
        <div className="bools">
          <div className="bol">O</div>
          <div className="bol">O</div>
          <div className="bol">O</div>
          <div className="bol">O</div>
          <div className="bol">O</div>
        </div>

      </div>
    </HomeConteinerStyle>
  );
}

export default Home;