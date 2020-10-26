import React from "react";

import { PageContainer, LoginContainer } from "./login.styles";

import { useAuth } from "../../firebase/firebase.util";

import GoogleSignInButton from "react-google-button";

const LoginPage = () => {
  const auth = useAuth();

  console.log(`Current User Email: ${auth.state.user?.email}`);
  console.log(`Authorized User? ${auth.isAuthorized}`);

  return (
    <PageContainer>
      <LoginContainer>
        <GoogleSignInButton
          type="light"
          onClick={auth.signIn}
          className="w3-display-middle"
        />
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
