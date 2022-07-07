import React from 'react';

import { ContactConteinerStyle, ListLinkSt } from './styles';
import { Title } from '../title'
import { Button } from '../button'

const Contact = () => {
  return (
    <ContactConteinerStyle>
      <ListLinkSt>
        <Title fontSize='1.5rem' fontColor={props => props.theme.colors.text}>Contact</Title>
        <Button
        width='200px'
        type='button'><a target="_blank" rel="noreferrer" href='https://github.com/RICHARD77SS'>GitHub</a></Button>
        <Button
        width='200px'
        type='button'
        ><a target="_blank" rel="noreferrer" href='https://www.instagram.com/richi_ri_kkkj/'>Instagram</a></Button>
        <Button
        width='200px'
        type='button'
        ><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/richard-silva-santos-460b7a210/'>Linkedin</a></Button>
        <Title fontSize='1.5rem' fontColor={props => props.theme.colors.text}>Email: richard_ss11@hotmail.com</Title>
      </ListLinkSt>
    </ContactConteinerStyle>
  );
}

export default Contact;