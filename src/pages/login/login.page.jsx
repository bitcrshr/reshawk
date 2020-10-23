import React from "react";

import { PageContainer, LoginContainer } from "./login.styles";

import { useAuth } from "../../firebase/firebase.util";

import GoogleSignInButton from "react-google-button";

const LoginPage = () => {
  const auth = useAuth();

  console.log(`Current User Email: ${auth.user?.email}`);
  console.log(`Authorized User? ${auth.authorized}`);

  return (
    <PageContainer>
      <LoginContainer>
        <GoogleSignInButton type="light" onClick={auth.signInWithGoogle} />
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
