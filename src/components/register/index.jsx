import React from 'react';
import { Link } from 'react-router-dom';

import { LoginContainerStyle } from './styles';
import { Button } from '../button';
import { Input } from '../input';
import { DivFlexStyle } from './styles';

export const RegisterPage = () => {

  return (
    <form action="getAuth()">
      <LoginContainerStyle>
          <Input id="email" type="text" placeholder=" E-mail, Usuario ou cell" inputSize="250px" />
          <Input id="password" type="password" placeholder=" Password" inputSize="250px" />
      </LoginContainerStyle>
      <DivFlexStyle> 
        <Button  size='100px'>
          <Link className='link' to='/abault'>
            Entrar
          </Link>
        </Button>
        <Button type="submit" size='100px'>
            Registrar
        </Button>
      </DivFlexStyle>
    </form>
  );
}


