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
const color3 = '#f5f5f5';

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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div> {isActive ? 
              <FolderStyle>
                {Port1active()}
            <FolderTextDiv>
              <Title fontSize='1.5rem' fontColor={color1}>Folder 1</Title>
              <br />
              <Title fontSize='1rem' fontColor={color2}>Pure HTML demonstration</Title>
              <br />
              <Title fontSize='1rem' fontColor={color3}> Motivation: Training my habilities in HTML and momorize the differents possibilities</Title>
            </FolderTextDiv>
            <Button
              type='button'
              buttonColor={props => props.theme.colors.primary}
              buttonBorderRadius='20px'
              buttonSize='80px'>More Infos</Button>
          </FolderStyle>
              : 'not active'}</div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          
          
          {({ isActive }) => (
            <div> {isActive ? 
              <FolderStyle>
                {Port2active()}
              <FolderTextDiv>
                <Title fontSize='1rem' fontColor={color1}>Folder 2</Title>
                <br />
                <Title fontSize='.8rem' fontColor={color2}>This PortFolders is based in HTML e CSS </Title>
                <br />
                <Title fontSize='1rem' fontColor={color3}>Motivation: Training my habilities in HTML e CSS. the Css is mutch used in styles the elements</Title>
              </FolderTextDiv>

              <Button
                type='button'
                buttonColor={props => props.theme.colors.primary}
                buttonBorderRadius='20px'
                buttonSize='80px'>More Infos</Button>
            </FolderStyle> : 'not active'}</div>
          )}
        </SwiperSlide>
        
        <SwiperSlide>

          {({ isActive }) => (
            <div>
              {isActive ? 
                <FolderStyle>
                  {Port3active()}
                <FolderTextDiv>
                  <Title fontSize='1rem' fontColor={color1}>Folder 3</Title>
                  <br />
                  <Title fontSize='.8rem' fontColor={color2}>In the folder the websites are based in pure Js, the js, is responsible for interaction of the users whith interface, must are used whith render HTML element e CSS attributes</Title>
                  <br />
                  <Title fontSize='1rem' fontColor={color3}>Motivation: The motivation is for domain the js, and DOM manipulation, for using in the another applications </Title>

                </FolderTextDiv>
                <Button
                  type='button'
                  buttonColor={props => props.theme.colors.primary}
                  buttonBorderRadius='20px'
                  buttonSize='80px'>More Infos</Button>
              </FolderStyle>
              : 'not active'}
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>

          {({ isActive }) => (
            <div>
              {isActive ?
                <FolderStyle>
                  {Port4active()}
                <FolderTextDiv>
                  <Title fontSize='1rem' fontColor={color1}>Folder 4</Title>
                  <br />
                  <Title fontSize='.8rem' fontColor={color2}>E com um pouco de conhecimento das tecnologias a cima, este quarto folder usara o React Js como base para esses ports, e até mesmo esse site aqui... </Title>
                  <br />
                  <Title fontSize='1rem' fontColor={color3}>Motivation: Juntar o conhecimento das tecnologias acima e trabalhar com mais agilidade... e particularmente até agora estou adorando a tecnologia...</Title>
                </FolderTextDiv>
                  <Button
                    type='button'
                    buttonColor={props => props.theme.colors.primary}
                    buttonBorderRadius='20px'
                    buttonSize='80px'>More Infos</Button>
                </FolderStyle>
                
                : '' }
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
}


function Port1active() {
  document.getElementById('folder1-port').classList.add('folder1-port-active')
  document.getElementById('folder2-port').classList.remove('folder2-port-active')
}
function Port2active() {
  document.getElementById('folder1-port').classList.remove('folder1-port-active')
  document.getElementById('folder2-port').classList.add('folder2-port-active')
  document.getElementById('folder3-port').classList.remove('folder3-port-active')
}
function Port3active() {
  document.getElementById('folder2-port').classList.remove('folder2-port-active')
  document.getElementById('folder3-port').classList.add('folder3-port-active')
  document.getElementById('folder4-port').classList.remove('folder4-port-active')
}
function Port4active() {
  document.getElementById('folder3-port').classList.remove('folder3-port-active')
  document.getElementById('folder4-port').classList.add('folder4-port-active')
}
