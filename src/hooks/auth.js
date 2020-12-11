import firebase from "firebase/app";
import "firebase/auth";
import React, { useState, useEffect, useContext, createContext } from "react";

import APIManager from "../utils/api-manager";

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={useProvideAuth()}>
      {children}
    </AuthContext.Provider>
  );
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [uid, setUID] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const api = APIManager.instance();

  const signIn = async () => {
    const fbUser = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    const token = await fbUser.user.getIdToken(true);
    const role = await (await fbUser.user.getIdTokenResult(true)).claims.role;
    const uid = fbUser.user.uid;

    setUser(await api.getUserByID(uid, token));
    setRole(role);
    setUID(uid);
    setToken(token);
  };

  const signOut = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  const register = async (inviteCode) => {
    const user = await api.registerUser(uid, token, inviteCode);

    if (!user) {
      // there was an error
      return;
    }

    setUser(user);
  };

  return {
    user,
    role,
    signIn,
    signOut,
    register,
  };
}
