import React from 'react';
import { Link } from 'react-router-dom';

import { LoginContainerStyle } from './styles';
import { Button } from '../button';
import { Input } from '../input';
import { DivFlexStyle } from './styles';

export const LoginPage = () => {

  return (
    <form action="">
      <LoginContainerStyle>
          <Input type="text" placeholder=" E-mail, Usuario ou cell" inputSize="250px" />
          <Input type="password" placeholder=" Password" inputSize="250px" />
      </LoginContainerStyle>
      <DivFlexStyle> 
        <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'>
          <Link className='link' to='/abault'>
            Entrar
          </Link>
        </Button>
        <Button buttonColor={props => props.theme.colors.primary} buttonBorderRadius='20px' buttonSize='100px'>
          <Link className='link' to='/abault'>
            Registrar
          </Link>
        </Button>
      </DivFlexStyle>
    </form>
  );
}
