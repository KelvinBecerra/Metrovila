// src/firebase.js
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from 'firebase/app';
const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDAz_scCfuHemwiFpSVnEBVEJwfCvKQ9qY",
  authDomain: "metrovila-c8be9.firebaseapp.com",
  projectId: "metrovila-c8be9",
  storageBucket: "metrovila-c8be9.firebasestorage.app",
  messagingSenderId: "327403471918",
  appId: "1:327403471918:web:d5b3bbe07922aeb19f4bbf",
  measurementId: "G-QM2Y5DPKN2"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
function call_login_google() {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
export { call_login_google,app, auth };
