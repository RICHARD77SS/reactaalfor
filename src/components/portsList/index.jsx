import React from 'react';

import { PortsListStyle } from './style';
import { Port1, Port2, Port3, Port4 } from '../port';
import { Slider, Slide } from '../mainSlider';

const settings = {
  spaceBetween: 50,
  slidesPerView: 2,
  navigation: true,
  pagination: {
    clickable: true,
  },
};

export const PortsList = () => {
  return (
    <PortsListStyle>
      <Slider settings={settings}>
        <Slide><Port1 /></Slide>
        <Slide><Port2 /></Slide>
        <Slide><Port3 /></Slide>
        <Slide><Port4 /></Slide>
      </Slider>
    </PortsListStyle>
  )
}