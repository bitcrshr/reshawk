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
export const db = firebaseApp.firestore();

/////////////////////////////////////////

export const context = createContext();
const initialState = {
  user: null,
  isMiamiUser: null,
  dbUser: null,
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
    console.table(auth.state);
    auth.signInWithPopup(provider).then((response) => {
      if (!isMiamiEmail(response.user.email)) {
        setState({
          user: response.user,
          isMiamiUser: false,
          dbUser: null,
        });

        return;
      }

      setState({
        ...state,
        isMiamiUser: true,
      });

      db.collection("authorized-users")
        .where("email", "==", response.user.email)
        .limit(1)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            setState({
              user: response.user.email,
              isMiamiUser: true,
              dbUser: null,
            });
            return;
          }

          setState({
            user: response.user,
            isMiamiUser: true,
            dbUser: { ...snapshot.docs[0].data(), id: snapshot.docs[0].id },
          });
        });
    });
  };

  const signOut = () => {
    console.table(auth.state);
    setState(initialState);
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setState(initialState);
        return;
      }

      db.collection("authorized-users")
        .where("email", "==", user.email)
        .get()
        .then((snapshot) => {
          setState({
            user: user,
            isMiamiUser: isMiamiEmail(user.email),
            dbUser: !snapshot.empty
              ? { ...snapshot.docs[0].data(), id: snapshot.docs[0].id }
              : null,
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

function isMiamiEmail(email) {
  return email.slice(email.length - 12) === "@miamioh.edu";
}
