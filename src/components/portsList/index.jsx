import React from 'react';

import { PortsListStyle } from './style';
import { Port } from '../port';
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
        <Slide><Port /></Slide>
        <Slide><Port /></Slide>
        <Slide><Port /></Slide>
        <Slide><Port /></Slide>
        <Slide><Port /></Slide>
      </Slider>
    </PortsListStyle>
  )
}