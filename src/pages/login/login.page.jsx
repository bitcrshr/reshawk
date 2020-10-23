import React from "react";

import { onLoginClick } from "./login.utils";
import { PageContainer, LoginContainer } from "./login.styles";

import GoogleSignInButton from "react-google-button";

const LoginPage = () => (
  <PageContainer>
    <LoginContainer>
      <GoogleSignInButton type="light" onClick={onLoginClick} />
    </LoginContainer>
  </PageContainer>
);

export default LoginPage;
