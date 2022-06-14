import React from 'react';

import { HomeConteinerStyle } from './styles';

const Home: React.FC = () => {
  return (
    <HomeConteinerStyle>
      <div className="home">
        <div className="baner">
          <img src="" alt="bannner" />
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