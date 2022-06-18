import React from 'react';
import { FolderStyle } from './styles';
import { Title } from '../title';
import { Button } from '../button';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FolderTextDiv } from './styles';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const color1 = '#c2aeff';
const color2 = '#aeffba';
const color3 = '#ff4747';

export default function Folder() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FolderStyle>
            <FolderTextDiv>
              <Title fontSize='1.5rem' fontColor={color1}>Folder 1</Title>
              <Title fontSize='1rem' fontColor={color2}>Pure HTML demonstration</Title>
              <Title fontSize='1rem' fontColor={color3}>Motivation: Training my habilities in HTML and momorize the differents possibilities</Title>
            </FolderTextDiv>
            <Button
              type='button'
              buttonColor={props => props.theme.colors.primary}
              buttonBorderRadius='20px'
              buttonSize='80px' onClick=''>More Infos</Button>
          </FolderStyle>
        </SwiperSlide>
        <SwiperSlide>
          <FolderStyle>
            <FolderTextDiv>
              <Title fontSize='1rem' fontColor={color1}>Folder 2</Title>
              <Title fontSize='.8rem' fontColor={color2}>This PortFolders is based in<Title fontSize='.8rem' fontColor={color1}> HTML e CSS</Title> </Title>
              <Title fontSize='1rem' fontColor={color3}>Motivation: Training my habilities in HTML e CSS. the Css is mutch used in styles the elements</Title>

            </FolderTextDiv>
            <Button
              type='button'
              buttonColor={props => props.theme.colors.primary}
              buttonBorderRadius='20px'
              buttonSize='80px' onClick=''>More Infos</Button>
          </FolderStyle>
        </SwiperSlide>
        <SwiperSlide>
          <FolderStyle>
            <FolderTextDiv>
              <Title fontSize='1rem' fontColor={color1}>Folder 3</Title>
              <Title fontSize='.8rem' fontColor={color2}>In the folder the websites are based in pure<Title fontSize='.8rem' fontColor={color1}> Js</Title>, the js is the must popular language og the programmimg, is responsible for interaction of the users whith interface, must are used whith render HTML element e CSS attributes</Title>
              <Title fontSize='1rem' fontColor={color3}>Motivation: The motivation is for domain the js, and DOM manipulation, for using in the another applications </Title>

            </FolderTextDiv>
            <Button
              type='button'
              buttonColor={props => props.theme.colors.primary}
              buttonBorderRadius='20px'
              buttonSize='80px' onClick=''>More Infos</Button>
          </FolderStyle>
        </SwiperSlide>
        <SwiperSlide>
          <FolderStyle>
            <FolderTextDiv>
              <Title fontSize='1rem' fontColor={color1}>Folder 4</Title>
              <Title fontSize='.8rem' fontColor={color2}>E com um pouco de conhecimento das tecnologias a cima, este quarto folder usara o<Title fontSize='.8rem' fontColor={color1}> React Js</Title> como base para esses ports, e até mesmo esse site aqui... </Title>
              <Title fontSize='1rem' fontColor={color3}>Motivation: Juntar o conhecimento das tecnologias acima e trabalhar com mais agilidade... e particularmente até agora estou adorando a tecnologia...</Title>
            </FolderTextDiv>
              <Button
                type='button'
                buttonColor={props => props.theme.colors.primary}
                buttonBorderRadius='20px'
                buttonSize='80px' onClick=''>More Infos</Button>
          </FolderStyle>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
