import * as firebase from "firebase";

import React, { useState, useEffect, useContext, createContext } from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// safe to expose publicly
const firebaseConfig = {
  apiKey: "AIzaSyCrxI0frxlzVZBqg85TTo7xkbyjyVRBV4E",
  authDomain: "reshawk-app.firebaseapp.com",
  databaseURL: "https://reshawk-app.firebaseio.com",
  projectId: "reshawk-app",
  storageBucket: "reshawk-app.appspot.com",
  messagingSenderId: "725106275678",
  appId: "1:725106275678:web:87a740653ae594e92fcbcf",
  measurementId: "G-TC0203ZNT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

/////////////////////////////////////////

const context = createContext();
const initialState = {
  user: null,
  isAuthorized: null,
};

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <context.Provider value={auth}>{children}</context.Provider>;
}

export const useAuth = () => {
  return useContext(context);
};

function useProvideAuth() {
  const [state, setState] = useState(initialState);

  const signIn = () => {
    auth.signInWithPopup(provider).then((response) => {
      if (!isMiamiEmail(response.user.email)) {
        setState({
          user: response.user,
          isAuthorized: false,
        });

        return;
      }

      isAuthorized(response.user.email).then((authorized) => {
        setState({
          user: response.user,
          isAuthorized: authorized,
        });
      });
    });
  };

  const signOut = () => {
    auth.signOut().then(() =>
      setState({
        user: null,
        isAuthorized: null,
      })
    );
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setState(initialState);
        return;
      }

      isAuthorized(user.email).then((authorized) => {
        setState({
          user: user,
          isAuthorized: authorized,
        });
      });
    });

    return () => unsubscribe();
  }, []);

  return {
    state,
    signIn,
    signOut,
  };
}

async function isAuthorized(email) {
  const snapshot = await db
    .collection("authorized-users")
    .where("email", "==", email)
    .get();

  return !snapshot.empty;
}

function isMiamiEmail(email) {
  return email.slice(email.length - 12) === "@miamioh.edu";
}
