import * as firebase from "firebase";

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

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const db = firebaseApp.firestore();
