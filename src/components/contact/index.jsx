import React from 'react';

import { ContactConteinerStyle } from './styles';
import { Title } from '../title'
import { Button } from '../button'

const Contact = () => {
  return (
    <ContactConteinerStyle>
      <h1>Contact</h1>
      <Title fontSize='1.5rem' fontColor={props => props.theme.colors.text}>Email: richard_ss11@hotmail.com</Title>
      <Button buttonBorderRadius={props => props.theme.colors.bordeer}
        buttonColor={props => props.theme.colors.background}
        buttonSize='100px'
        onClick=' '
        type='button'>GitHub</Button>
      <Button buttonBorderRadius={props => props.theme.colors.bordeer}
        buttonColor={props => props.theme.colors.background}
        buttonSize='100px'
        onClick=' '
        type='button'>Instagram</Button>
    </ContactConteinerStyle>
  );
}

export default Contact;