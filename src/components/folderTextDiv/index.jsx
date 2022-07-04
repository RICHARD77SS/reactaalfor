 import React from 'react';
 import { Title } from '../title';
 import { FolderTextDivStyle } from './styles';
 import { Button } from '../button';
 import { Swiper,SwiperSlide } from "swiper/react";
 import { FolderStyle } from '../folder/styles';
 import { EffectCoverflow, Pagination } from "swiper";

 import "swiper/css";
 import "swiper/css/effect-coverflow";
 import "swiper/css/pagination";



 const color1 = '#c2aeff';
 const color2 = '#aeffba';
 const color3 = '#ff4747';

 const FoldersInfos = () => [
   {
     id: "0",
     image: "https:i.postimg.cc/Gm5hg5YY/wp9122770.jpg",
     alt: "FolderImage",
     title1: "Folder 1",
     title2: "Pure HTML demonstration",
     title3: "Motivation: Training my habilities in HTML and momorize the differents possibilities"
   },
   {
     id: "0",
     image: "https:i.postimg.cc/Gm5hg5YY/wp9122770.jpg",
     alt: "FolderImage",
     title1: "Folder 2",
     title2: "This PortFolders is based in HTML e CSS",
     title3: "Motivation: Training my habilities in HTML e CSS. the Css is mutch used in styles the elements"
   },
   {
     id: "0",
     image: "https:i.postimg.cc/Gm5hg5YY/wp9122770.jpg",
     alt: "FolderImage",
     title1: "Folder 3",
     title2: "In the folder the websites are based in pure js, the js is the must popular language og the programmimg, is responsible for interaction of the users whith interface, must are used whith render HTML element e CSS attributes",
     title3: "Motivation: The motivation is for domain the js, and DOM manipulation, for using in the another applications"
   },
 ]


 function Folderfc({ image, title1, title2, title3 }) {
   return (
     <SwiperSlide>
       <FolderTextDivStyle>
         <img src={image} alt=""/>
         <Title fontSize='1.5rem' fontColor={color1}>{title1}</Title>
         <Title fontSize='1rem' fontColor={color2}>{title2}</Title>
         <Title fontSize='1rem' fontColor={color3}>{title3}</Title>
       </FolderTextDivStyle>
       <FolderStyle>
         <Button
                   type='button'
                   size='80px' onClick=''>More Infos</Button>
       </FolderStyle>

     </SwiperSlide>
   );
 }

function FolderDiv() {

   return (
     <>
       {FoldersInfos.map((folderfc => {
         return(
         <Folderfc key={folderfc.id} title1={folderfc.title1} image={folderfc.image} title2={folderfc.title2} title3={folderfc.title3} >
           </Folderfc>)
       }
       ))
     }
     </>
   );
 }
 

