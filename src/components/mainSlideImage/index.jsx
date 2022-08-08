import React from 'react';
import { MainSlideImageStyle, Div, ConteinerImage } from './styles';

import { Title } from '../title'

export const MainSlideImage = () => {
  return (
      <MainSlideImageStyle>
        <Div>
          <Title fontSize='1rem' >Gradiente generator</Title>
          
        </Div>
        <ConteinerImage>
          <img className="img" src="https://i.postimg.cc/762xxNmc/Screen-Shot-Tool-20220805111157.png" alt="" />
        </ConteinerImage>
      </MainSlideImageStyle>
  )
}



export const MainSlideImage2 = () => {
  return (
    <MainSlideImageStyle>
      <Div>
        <Title fontSize='1rem' >LandingPage</Title>

      </Div>
      <ConteinerImage>
        <img className="img" src="https://i.postimg.cc/Dz4n0fBm/landing.png" alt="" />
      </ConteinerImage>
    </MainSlideImageStyle>
  )
}


export const MainSlideImage3 = () => {
  return (
    <MainSlideImageStyle>
      <img className="img" src="https://i.postimg.cc/Dz4n0fBm/landing.png" alt="" />
    </MainSlideImageStyle>
  )
}
export const MainSlideImage4 = () => {
  return (
    <MainSlideImageStyle>
      <img className="img" src="https://img.freepik.com/free-vector/colorful-groovy-hand-drawn-background_23-2149075866.jpg?w=826" alt="" />
    </MainSlideImageStyle>
  )
}
export const MainSlideImage5 = () => {
  return (
    <MainSlideImageStyle>
      <img className="img" src="https://img.freepik.com/free-vector/abstract-colorful-fluid-background_23-2148901720.jpg?w=826" alt="" />
    </MainSlideImageStyle>
  )
}

