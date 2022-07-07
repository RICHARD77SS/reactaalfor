import React from 'react';

import { AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import { ContactConteinerStyle, ListLinkSt } from './styles';
import { Title } from '../title'
import { Button } from '../button'

const Contact = () => {
  return (
    <ContactConteinerStyle>
      <ListLinkSt>
        <Title fontSize='1.5rem' fontColor={props => props.theme.colors.text}>Contact</Title>
        <ContactConteinerStyle>
          <AiOutlineGithub className='icon1' size='35' /><Button
          width='200px'
            type='button'><a target="_blank" rel="noreferrer" href='https://github.com/RICHARD77SS'> GitHub</a></Button>

        </ContactConteinerStyle>
        <ContactConteinerStyle>
          <AiFillLinkedin className='icon1' size='35' /><Button
          width='200px'
          type='button'
          ><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/richard-silva-santos-460b7a210/'>Linkedin</a></Button>
        </ContactConteinerStyle>
        <ContactConteinerStyle>
          <AiFillInstagram className='icon1' size='35'/><Button
          width='200px'
          type='button'
          ><a  target="_blank" rel="noreferrer" href='https://www.instagram.com/richi_ri_kkkj/'>Instagram</a></Button>
        </ContactConteinerStyle>
        <Title fontSize='1rem' fontColor={props => props.theme.colors.text}>Email: richard_ss11@hotmail.com</Title>
      </ListLinkSt>
    </ContactConteinerStyle>
  );
}

export default Contact;