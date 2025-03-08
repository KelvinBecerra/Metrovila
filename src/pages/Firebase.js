// src/firebase.js
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
const auth = getAuth(app);


//funcion que permite el pupup de google y se autentifique

export {  app, auth, provider };
