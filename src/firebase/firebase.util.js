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

export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();

export const db = firebaseApp.firestore();

/////////////////////////////////////////

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signInWithGoogle = () => {
    return auth
      .signInWithPopup(provider)
      .then((response) => {
        setUser(response.user);

        if (isMiamiEmail(response.user.email)) {
          isAuthorizedUser(response.user.email).then((isAuthorized) => {
            setAuthorized(isAuthorized);
          });
        }

        return response.user;
      })
      .catch((error) => console.log(error));
  };

  const signOut = () => {
    return auth.signOut().then(() => {
      setUser(false);
      setAuthorized(false);
    });
  };

  const isMiamiEmail = (email) => {
    return (
      email.substring(email.length - 12, email.length).toLowerCase() ===
      "@miamioh.edu"
    );
  };

  const isAuthorizedUser = async (email) => {
    const snapshot = await db
      .collection("authorized-users")
      .where("email", "==", email)
      .get();

    return !snapshot.empty;
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
        setAuthorized(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    authorized,
    signInWithGoogle,
    signOut,
    isMiamiEmail,
    isAuthorizedUser,
  };
}
