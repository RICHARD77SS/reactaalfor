import React from 'react';
import { useContext } from "react";
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import { AuthGoogleContext } from "../../contexts/authGoogle";
import { HomeConteinerStyle } from './styles';
import { MainSlideImage, MainSlideImage2, MainSlideImage3, MainSlideImage4, MainSlideImage5 } from '../mainSlideImage';
import PortFolder from '../portFolders';
import { Slider, Slide } from '../slider';
import { BollsContainer } from '../bollsContainer'
import { Button } from '../button'

import { Plans } from '../homePlanCards'

const settings = {
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

    userLogado = ' Faça Login'
  } else {
    userLogado = JSON.parse(user).displayName +" Click para Sair"
  }
  return (
    <HomeConteinerStyle>
      <div>
        <Button width='120px' onClick={() => signOut()}><FaGoogle />  {userLogado} {userLogado.displayName}</Button>
        <Button width='70px'><Link className='linkRd' to='/login'>Login</Link></Button>
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
      <Plans />
      <PortFolder />
      <div className="home">
        <BollsContainer />
      </div>
    </HomeConteinerStyle>
  );
}

export default Home;