import React, { useState, useContext } from 'react';
import imagen from '../assets/imgusuario.png';
import { provider, auth,db} from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { UserContext } from '../app.jsx';
import { collection, doc,getDoc, query, getDocs,setDoc, where } from 'firebase/firestore';


import { signInWithEmailAndPassword } from "firebase/auth";

function Inisesion  () {
  const [correo,setcorreo]=useState('');  
  const [contrasena,setcontrasena]=useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      // autentica usuario con Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, correo, contrasena);
      const user = userCredential.user;
  
      // verificar si el usuario existe en Firestore
      const userRef = doc(db, "usuarios", user.uid);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        alert("Bienvenido " + user.displayName);
        setUser(user); // guarda el usuario en el contexto
        navigate("/"); // redirige a la página principal
      } else {
        alert("El usuario no está registrado en Firestore.");
      }
  
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("El correo no está registrado.");
      } else if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta.");
      }else if( error.code === "auth/invalid-credential"){
        alert("Correo invalido o contraseña invalida");

      } else {
        console.error("Error al iniciar sesión:", error);
        //alert("Error al iniciar sesión.");
      }
    } 
  }

  
//funcion que se encarga de crear una pestana emergente
// y con esa pagina de loggea el usuario
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

  const loginPopupGoogle = async () => {
    setLoading(true);
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setUser(user); // Actualiza el valor de user en el contexto

      setError(null);
      setLoading(false);
      navigate("/");

      scroll(0, 0);
    } catch (error) {
      console.log(error.message);

      setError(error.message);
      setLoading(false);
    }
  };
//aqui se muestra la pagina de inicio de sesion
//se me olvido implementar la funcion de registro de usuario con los inputs que aparecen
//falta hacer eso
  return (
    <>
      <div className='imagenuser-div'>
        <h1 id='sesion'>Inicio de Sesion</h1>
        <img className='imagenuser' src={imagen} alt="usuario" />
      </div>
      <div className='inisesion-div'>
        <label className='labelcitos' htmlFor="correo">Email</label>
        <input className='inputcito' id='correo' type="email" onChange={(e) => setcorreo(e.target.value)} />
        <label className='labelcito' id='password' htmlFor="">Contrasena</label>
        <input className='inputcito' type="password" onChange={(e) => setcontrasena(e.target.value)} />
        <div className='containerboton'>
          <a href='/formulario'>
            <button className='botoncitos'>¿No tiene usuario?  Resgistrarse </button>
          </a>
          <button className='botoncitos'>Has olvidado tu contraseña</button>
        </div>
        <button className='botoncitomain' onClick={() => signIn()}>Iniciar Sesion</button>
        <a href="/">
          <button className='botoncitosini'>Inicio</button>
        </a>
        <button className='botoncitosini' onClick={loginPopupGoogle}>Google</button>
      </div>
    </>
  );
}

export default Inisesion;