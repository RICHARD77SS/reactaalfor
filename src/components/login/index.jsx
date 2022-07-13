import React from 'react';

import { FaGoogle } from 'react-icons/fa';

 import { Button } from '../button';
 import { DivFlexStyles } from './styles';

import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";



export const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function handleLoginFromGoogle() {
    await signInGoogle();
  }
  if (!signed) {
    return <Button width='200px' onClick={handleLoginFromGoogle}><FaGoogle size='12' /> Faça login com google</Button>;
  } else {
    return <Navigate to="/" />;
  }
};

export const LoginPage = () => {

  return (
    <DivFlexStyles>
      <Login />
      <Button width='200px'></Button>
      <Button width='200px'></Button>
      <Button width='200px'><Link to='/register'>Crie uma conta</Link></Button>
    </DivFlexStyles>
  );
};