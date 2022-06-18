import React from 'react';
import { HomeConteinerStyle } from './styles';
import Main from '../main';
import MainSlideImage from '../mainSlideImage';
import PortFolder from '../portFolders'
import { Title } from '../title';
import { Slider, Slide } from '../mainSlider';

const settings= {
  spaceBetween: 50,
  slidesPerView: 2,
  navigation: true,
  pagination: {
    clickable: true,
  },
};


function Home() {
  return (
    <HomeConteinerStyle>
      <Main />
      <Slider settings={settings} >
          <Slide>
            <MainSlideImage />
          </Slide>
          <Slide>
            <MainSlideImage />
          </Slide>
          <Slide>
            <MainSlideImage />
          </Slide>
          <Slide>
            <MainSlideImage />
          </Slide>
          <Slide>
            <MainSlideImage />
          </Slide>
      </Slider>
      <Title fontSize="2rem" fontColor={props => props.theme.colors.text}>PortFolders</Title>
      <PortFolder />
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