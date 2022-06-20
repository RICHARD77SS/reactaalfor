import React from 'react';
import { Link } from 'react-router-dom';

import { LoginContainerStyle } from './styles';
import { Button } from '../button';

export const LoginPage = () => {

  return (
    <LoginContainerStyle>
      <form action="">
        <input type="text" placeholder=" E-mail, Usuario ou cell" />
        <input type="password" placeholder=" Password" />
        <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'><Link className='link' to='/abault'>Entrar</Link></Button>
      </form>
    </LoginContainerStyle>
  );
}
