import React from "react";

import * as firebase from "firebase";

import { firebaseConfig } from "../../firebase/firebase.util";

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

const LoginPage = () => (
  <div>
    <button onClick={onLoginClick}>Sign In With Google</button>
  </div>
);
const onLoginClick = () => {
  firebase.auth().signInWithRedirect(provider);
};

export default LoginPage;
