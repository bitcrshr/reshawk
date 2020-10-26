import React from "react";

import { PageContainer, LoginContainer } from "./login.styles";

import { useAuth } from "../../firebase/firebase.util";

import GoogleSignInButton from "react-google-button";

const LoginPage = () => {
  const auth = useAuth();

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
