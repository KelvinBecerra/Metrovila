import React, { useState, useContext } from 'react';
import imagen from '../assets/imgusuario.png';
import { provider, auth, db } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../app.jsx';
import { doc, getDoc } from 'firebase/firestore';

function Inisesion() {
  const [correo, setcorreo] = useState('');
  const [contrasena, setcontrasena] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para iniciar sesión como usuario
  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, correo, contrasena);
      const user = userCredential.user;

      const userRef = doc(db, "usuarios", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        alert("Bienvenido " + user.displayName);
        setUser(user);
        navigate("/rutas"); // Redirige a la página de rutas
      } else {
        alert("El usuario no está registrado en Firestore.");
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  // Función para iniciar sesión como administrador
  const adminLogin = () => {
    if (correo === "admin" && contrasena === "12345") {
      alert("Inicio de sesión como administrador exitoso");
      const adminUser = { email: "admin", isAdmin: true }; // Configura el rol de administrador
      setUser(adminUser);
      navigate("/rutas"); // Redirige al panel de rutas
    } else {
      alert("Usuario o contraseña de administrador incorrectos");
    }
  };

  // Función para manejar errores de autenticación
  const handleAuthError = (error) => {
    if (error.code === "auth/user-not-found") {
      alert("El correo no está registrado.");
    } else if (error.code === "auth/wrong-password") {
      alert("Contraseña incorrecta.");
    } else if (error.code === "auth/invalid-credential") {
      alert("Correo inválido o contraseña inválida");
    } else {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <div className='imagenuser-div'>
        <h1 id='sesion'>Inicio de Sesión</h1>
        <img className='imagenuser' src={imagen} alt="usuario" />
      </div>
      <div className='inisesion-div'>
        <label className='labelcitos' htmlFor="correo">Email</label>
        <input
          className='inputcito'
          id='correo'
          type="text"
          onChange={(e) => setcorreo(e.target.value)}
        />
        <label className='labelcito' id='password' htmlFor="">Contraseña</label>
        <input
          className='inputcito'
          type="password"
          onChange={(e) => setcontrasena(e.target.value)}
        />
        <div className='containerboton'>
          <a href='/formulario'>
            <button className='botoncitos'>¿No tiene usuario? Registrarse</button>
          </a>
          <button className='botoncitos'>¿Olvidaste tu contraseña?</button>
        </div>
        <button className='botoncitomain' onClick={signIn}>Iniciar Sesión</button>
        <button className='botoncitomain' onClick={adminLogin}>Iniciar como Admin</button>
        <a href="/">
          <button className='botoncitosini'>Inicio</button>
        </a>
      </div>
    </>
  );
}

export default Inisesion;
