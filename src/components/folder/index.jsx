import React from 'react';
import { FolderStyle } from './styles';
import { Button } from '../button';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FolderItem1, FolderItem2, FolderItem3, FolderItem4 } from '../folderItem';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css"

import { EffectCoverflow, Pagination } from "swiper";

export default function Folder() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable:true}}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <> {isActive ? 
              <FolderStyle>
                {Port1active()}
                <FolderItem1 />
              </FolderStyle>
              :
              ''}
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <> {isActive ? 
              <FolderStyle>
                {Port2active()}
                <FolderItem2 />
              </FolderStyle> :
              ''}
            </>
          )}
        </SwiperSlide>
        
        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive ? 
                <FolderStyle>
                  {Port3active()}
                  <FolderItem3 />
                </FolderStyle>
                :
                '' }
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              {isActive ?
                <FolderStyle>
                  {Port4active()}
                  <FolderItem4 />
                </FolderStyle>
                :
                '' }
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
}


function Port1active() {
  document.getElementById('folder1-port').classList.add('folder1-port-active')
  document.getElementById('folder2-port').classList.remove('folder2-port-active')

  document.getElementById('folder1-port2').classList.add('folder1-port-active')
  document.getElementById('folder2-port2').classList.remove('folder2-port-active')

  document.getElementById('folder1-port3').classList.add('folder1-port-active')
  document.getElementById('folder2-port3').classList.remove('folder2-port-active')

  document.getElementById('folder1-port4').classList.add('folder1-port-active')
  document.getElementById('folder2-port4').classList.remove('folder2-port-active')

  document.getElementById('folder3-port').classList.remove('folder3-port-active')
  document.getElementById('folder3-port2').classList.remove('folder3-port-active')
  document.getElementById('folder3-port3').classList.remove('folder3-port-active')
  document.getElementById('folder3-port4').classList.remove('folder3-port-active')


  document.getElementById('folder4-port').classList.remove('folder4-port-active')
  document.getElementById('folder4-port2').classList.remove('folder4-port-active')
  document.getElementById('folder4-port3').classList.remove('folder4-port-active')
  document.getElementById('folder4-port4').classList.remove('folder4-port-active')


} 
function Port2active() {
  document.getElementById('folder1-port').classList.remove('folder1-port-active')
  document.getElementById('folder2-port').classList.add('folder2-port-active')
  document.getElementById('folder3-port').classList.remove('folder3-port-active')

  document.getElementById('folder1-port2').classList.remove('folder1-port-active')
  document.getElementById('folder2-port2').classList.add('folder2-port-active')
  document.getElementById('folder3-port2').classList.remove('folder3-port-active')

  document.getElementById('folder1-port3').classList.remove('folder1-port-active')
  document.getElementById('folder2-port3').classList.add('folder2-port-active')
  document.getElementById('folder3-port3').classList.remove('folder3-port-active')

  document.getElementById('folder1-port4').classList.remove('folder1-port-active')
  document.getElementById('folder2-port4').classList.add('folder2-port-active')
  document.getElementById('folder3-port4').classList.remove('folder3-port-active')

  document.getElementById('folder4-port').classList.remove('folder4-port-active')
  document.getElementById('folder4-port2').classList.remove('folder4-port-active')
  document.getElementById('folder4-port3').classList.remove('folder4-port-active')
  document.getElementById('folder4-port4').classList.remove('folder4-port-active')
}
function Port3active() {
  document.getElementById('folder2-port').classList.remove('folder2-port-active')
  document.getElementById('folder3-port').classList.add('folder3-port-active')
  document.getElementById('folder4-port').classList.remove('folder4-port-active')

  document.getElementById('folder2-port2').classList.remove('folder2-port-active')
  document.getElementById('folder3-port2').classList.add('folder3-port-active')
  document.getElementById('folder4-port2').classList.remove('folder4-port-active')

  document.getElementById('folder2-port3').classList.remove('folder2-port-active')
  document.getElementById('folder3-port3').classList.add('folder3-port-active')
  document.getElementById('folder4-port3').classList.remove('folder4-port-active')

  document.getElementById('folder2-port4').classList.remove('folder2-port-active')
  document.getElementById('folder3-port4').classList.add('folder3-port-active')
  document.getElementById('folder4-port4').classList.remove('folder4-port-active')

  document.getElementById('folder1-port').classList.remove('folder1-port-active')
  document.getElementById('folder1-port2').classList.remove('folder1-port-active')
  document.getElementById('folder1-port3').classList.remove('folder1-port-active')
  document.getElementById('folder1-port4').classList.remove('folder1-port-active')
}
function Port4active() {
  document.getElementById('folder3-port').classList.remove('folder3-port-active')
  document.getElementById('folder4-port').classList.add('folder4-port-active')

  document.getElementById('folder3-port2').classList.remove('folder3-port-active')
  document.getElementById('folder4-port2').classList.add('folder4-port-active')

  document.getElementById('folder3-port3').classList.remove('folder3-port-active')
  document.getElementById('folder4-port3').classList.add('folder4-port-active')

  document.getElementById('folder3-port4').classList.remove('folder3-port-active')
  document.getElementById('folder4-port4').classList.add('folder4-port-active')

  document.getElementById('folder1-port').classList.remove('folder1-port-active')
  document.getElementById('folder1-port2').classList.remove('folder1-port-active')
  document.getElementById('folder1-port3').classList.remove('folder1-port-active')
  document.getElementById('folder1-port4').classList.remove('folder1-port-active')

  document.getElementById('folder2-port').classList.remove('folder2-port-active')
  document.getElementById('folder2-port2').classList.remove('folder2-port-active')
  document.getElementById('folder2-port3').classList.remove('folder2-port-active')
  document.getElementById('folder2-port4').classList.remove('folder2-port-active')
}
