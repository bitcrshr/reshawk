import React from "react";

import { onLoginClick } from "./login.utils";
import { PageContainer, LoginContainer } from "./login.styles";
import { isMiamiEmail, isAuthorizedUser } from './login.utils';

import { useAuth } from '../../firebase/firebase.util';

import GoogleSignInButton from "react-google-button";

const LoginPage = () => {
  const auth = useAuth();
  const onLoginClick = () => {
    auth.signInWithGoogle()
      .then(function (result) {
        var user = result.user;
  
        //we only want to query the DB if it's a Miami email.
        if (isMiamiEmail(user.email)) {
          isAuthorizedUser(user.email).then((auth) =>
            console.log(`Authorized user? ${auth}`)
          );
        }
      })
      .catch(function (error) {
        console.log(
          `Error code: ${error.code} \nError message: ${error.message}`
        );
      });
  };

  console.log(auth.user);

  return (!auth.user) ? (<PageContainer>
    <LoginContainer>
      <GoogleSignInButton type="light" onClick={onLoginClick} />
    </LoginContainer>
  </PageContainer>) : (<div><button onClick={auth.signOut}>sign out</button></div>);
};

export default LoginPage;
