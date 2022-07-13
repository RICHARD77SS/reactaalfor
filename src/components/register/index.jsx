import React from 'react';
import { Link } from 'react-router-dom';

import { LoginContainerStyle } from './styles';
import { Button } from '../button';
import { Input } from '../input';
import { DivFlexStyle } from './styles';

export const RegisterPage = () => {

  return (
    <>
      <LoginContainerStyle>
          <Input id="email" type="text" placeholder=" E-mail, Usuario ou cell" inputSize="250px" />
          <Input id="password" type="password" placeholder=" Password" inputSize="250px" />
          <Input id="password" type="password" placeholder=" Confirme Password" inputSize="250px" />
        <DivFlexStyle>
          <Input type='checkbox' /><p className='ptext'>Concordo com os <a href=' '>Termos </a>e<br/> a <a href=' '>Política de Privacidade</a></p>
        </DivFlexStyle>
      </LoginContainerStyle>
      <DivFlexStyle> 
        <Button  width='100px'>
          <Link className='link' to='/abault'>
            Entrar
          </Link>
        </Button>
        <Button type="submit" width='100px'>
            Registrar
        </Button>
      </DivFlexStyle>
    </>
  );
}


