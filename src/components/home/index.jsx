import React from 'react';

import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { HomeConteinerStyle } from './styles';
import { MainSlideImage, MainSlideImage2, MainSlideImage3, MainSlideImage4, MainSlideImage5  } from '../mainSlideImage';
import PortFolder from '../portFolders'
import { Title } from '../title';
import { Slider, Slide } from '../slider';
import { BollsContainer } from '../bollsContainer'
import { Button } from '../button'
import { FaGoogle } from 'react-icons/fa';

const settings= {
  spaceBetween: 50,
  slidesPerView: 2,
  navigation: true,
  pagination: {
    clickable: true,
  },
};



function Home() {
  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = JSON.parse(user);
  if (!userLogado) {
    userLogado = 'Sair'
  }
  return (
    <HomeConteinerStyle>
      <div>
        <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='auto' onClick={() => signOut()}> <FaGoogle />Sair  {userLogado.displayName}</Button>
      </div>
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