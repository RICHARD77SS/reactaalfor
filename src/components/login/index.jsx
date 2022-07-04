import React from 'react';

import { FaGoogle } from 'react-icons/fa';

 import { Button } from '../button';
 import { DivFlexStyles } from './styles';

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function handleLoginFromGoogle() {
    await signInGoogle();
  }
  if (!signed) {
    return <Button size='100px' onClick={handleLoginFromGoogle}><FaGoogle size='12' />Logar</Button>;
  } else {
    return <Navigate to="/" />;
  }
};

export const LoginPage = () => {

  return (
    <DivFlexStyles>
      <Login />
    </DivFlexStyles>
  );
};