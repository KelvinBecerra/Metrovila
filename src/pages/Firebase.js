// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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
        // El usuario ha iniciado sesión con éxito
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        alert(result.user.displayName)
        // Otros datos disponibles usando getAdditionalUserInfo(result)
        console.log('Usuario autenticado:', user);
      })
      .catch((error) => {
        // Manejar errores
        console.error('Error de autenticación:', error);
      });
  
  }
export { call_login_google,app, auth };
