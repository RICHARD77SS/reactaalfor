import React from 'react';
import { FolderItemStyle } from './styles'
import { FolderTextDiv } from '../folder/styles'
import { Title } from '../title'
import { Button } from '../button'

const color1 = '#c2aeff';
const color2 = '#aeffba';
const color3 = '#f5f5f5';

export const FolderItem1 = () => {
  return (
  
    <FolderItemStyle>
      <FolderTextDiv>
        <Title fontSize='1.5rem' fontColor={color1}>Folder 1</Title>
        <br />
        <Title fontSize='1rem' fontColor={color2}>Pure HTML demonstration</Title>
        <br />
        <Title fontSize='1rem' fontColor={color3}> Motivation: Training my habilities in HTML and momorize the differents possibilities</Title>
      </FolderTextDiv>
      <Button
        type='button'
        size='80px'>More Infos
      </Button>
    </FolderItemStyle>
  )
}
export const FolderItem2 = () => {
  return (
  
    <FolderItemStyle>
      <FolderTextDiv>
        <Title fontSize='1rem' fontColor={color1}>Folder 2</Title>
        <br />
        <Title fontSize='.8rem' fontColor={color2}>This PortFolders is based in HTML e CSS </Title>
        <br />
        <Title fontSize='1rem' fontColor={color3}>Motivation: Training my habilities in HTML e CSS. the Css is mutch used in styles the elements</Title>
      </FolderTextDiv>

      <Button
        type='button'
        size='80px'>More Infos
      </Button>
    </FolderItemStyle>
  )
}
export const FolderItem3 = () => {
  return (
  
    <FolderItemStyle>
      <FolderTextDiv>
        <Title fontSize='1rem' fontColor={color1}>Folder 3</Title>
        <br />
        <Title fontSize='.8rem' fontColor={color2}>In the folder the websites are based in pure Js, the js, is responsible for interaction of the users whith interface, must are used whith render HTML element e CSS attributes</Title>
        <br />
        <Title fontSize='1rem' fontColor={color3}>Motivation: The motivation is for domain the js, and DOM manipulation, for using in the another applications </Title>

      </FolderTextDiv>
      <Button
        type='button'
        size='80px'>More Infos
      </Button>
    </FolderItemStyle>
  )
}
export const FolderItem4 = () => {
  return (
  
    <FolderItemStyle>
      <FolderTextDiv>
        <Title fontSize='1rem' fontColor={color1}>Folder 4</Title>
        <br />
        <Title fontSize='.8rem' fontColor={color2}>E com um pouco de conhecimento das tecnologias a cima, este quarto folder usara o React Js como base para esses ports, e até mesmo esse site aqui... </Title>
        <br />
        <Title fontSize='1rem' fontColor={color3}>Motivation: Juntar o conhecimento das tecnologias acima e trabalhar com mais agilidade... e particularmente até agora estou adorando a tecnologia...</Title>
      </FolderTextDiv>
      <Button
        type='button'
        size='80px'>More Infos
      </Button>
    </FolderItemStyle>
  )
}