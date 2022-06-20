import React from 'react';

import { StoreConteinerFlex, ListsProductsStyle } from './styles'
import Filters from '../filters'
import ListProduct from '../listProduct'

import { CardRender } from '../card'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";



export function StoreSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='price' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='price' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://steemitimages.com/DQmSnxZYjHSqd9C6nNUuntWkx6uw5UCUUXmyPBHC9p9t8xN/bitcoin%20.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
        <SwiperSlide>
          <CardRender image='https://i.postimg.cc/R0mF56HK/th-2692886106-removebg-preview.png' title='card render' price='R$ 100.000,00' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


const StoreConteiner = () => {

  return (
    <StoreConteinerFlex>
      <Filters></Filters>
      <ListsProductsStyle>
        <ListProduct></ListProduct>
        <StoreSlider></StoreSlider>

      </ListsProductsStyle>
    </StoreConteinerFlex>
  );
};

export default StoreConteiner;

