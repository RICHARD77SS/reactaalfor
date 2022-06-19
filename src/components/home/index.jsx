import React from 'react';
import { HomeConteinerStyle } from './styles';
import Main from '../main';
import { MainSlideImage, MainSlideImage2, MainSlideImage3, MainSlideImage4, MainSlideImage5  } from '../mainSlideImage';
import PortFolder from '../portFolders'
import { Title } from '../title';
import { Slider, Slide } from '../mainSlider';
import { BollsContainer } from '../bollsContainer'

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
            <MainSlideImage2 />
          </Slide>
          <Slide>
            <MainSlideImage3 />
          </Slide>
          <Slide>
            <MainSlideImage4 />
          </Slide>
          <Slide>
            <MainSlideImage5 />
          </Slide>
      </Slider>
      <Title fontSize="2rem" fontColor={props => props.theme.colors.text}>PortFolders</Title>
      <PortFolder />
      <div className="home">
        <BollsContainer />
      </div>
    </HomeConteinerStyle>
  );
}

export default Home;