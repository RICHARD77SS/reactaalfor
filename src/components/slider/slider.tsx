import React from 'react';
import { SliderConteinerStyle } from './styles';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import './slider.css'

import { ReactNode } from 'react';

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

export function Slider({ settings, children }: SliderProps) {

    return (
        <SliderConteinerStyle>
            <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>{children}
            </Swiper>
        </SliderConteinerStyle>
    );
};


