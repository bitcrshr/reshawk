import React from "react";

import { signInWithGoogle } from "../../firebase/firebase.util";

const onLoginClick = () => {
  signInWithGoogle()
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(user);

      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

const LoginPage = () => (
  <div>
    <button onClick={onLoginClick}>Sign In With Google</button>
  </div>
);

export default LoginPage;
