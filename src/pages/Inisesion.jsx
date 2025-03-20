import React, { useState, useContext } from 'react';
import imagen from '../assets/imgusuario.png';
import { provider, auth, db } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { UserContext } from '../app.jsx';

function Inisesion() {
  const [correo, setcorreo] = useState('');
  const [contrasena, setcontrasena] = useState('');
  const { user, setUser } = useContext(UserContext);
  const [adminMode, setAdminMode] = useState(false); // Modo administrador
  const navigate = useNavigate();

  // Función para inicio de sesión normal
  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, correo, contrasena);
      const user = userCredential.user;
      alert('Bienvenido ' + user.displayName);
      setUser(user);
      setAdminMode(false); // Modo estándar
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('El correo no está registrado.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Contraseña incorrecta.');
      } else {
        console.error('Error al iniciar sesión:', error);
      }
    }
  };

  // Función para inicio de sesión como administrador
  const loginAsAdmin = () => {
    if (correo === 'admin' && contrasena === '12345') {
      alert('Bienvenido, Admin!');
      setUser({ email: 'admin', displayName: 'Administrador' }); // Simulación de usuario administrador
      setAdminMode(true); // Activa modo administrador
    } else {
      alert('Credenciales de administrador incorrectas.');
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    await signOut(auth);
    setUser(null); // Borra usuario del contexto
    setAdminMode(false); // Desactiva modo administrador
    alert('Sesión cerrada.');
    navigate('/');
  };

  return (
    <>
      <div className='imagenuser-div'>
        <h1 id='sesion'>Inicio de Sesión</h1>
        <img className='imagenuser' src={imagen} alt='usuario' />
      </div>
      <div className='inisesion-div'>
        {!adminMode ? (
          <>
            <label className='labelcitos' htmlFor='correo'>
              Email
            </label>
            <input
              className='inputcito'
              id='correo'
              type='email'
              onChange={(e) => setcorreo(e.target.value)}
            />
            <label className='labelcito' id='password' htmlFor=''>
              Contraseña
            </label>
            <input
              className='inputcito'
              type='password'
              onChange={(e) => setcontrasena(e.target.value)}
            />
            <div className='containerboton'>
              <a href='/formulario'>
                <button className='botoncitos'>¿No tiene usuario? Registrarse</button>
              </a>
              <button className='botoncitos'>¿Olvidaste tu contraseña?</button>
            </div>
            <button className='botoncitomain' onClick={signIn}>
              Iniciar Sesión
            </button>
            <button className='botoncitomain' onClick={loginAsAdmin}>
              Acceder como Admin
            </button>
            <a href='/'>
              <button className='botoncitosini'>Inicio</button>
            </a>
          </>
        ) : (
          <div className='admin-panel'>
            <h2>Panel de Administrador</h2>
            <button className='btns' onClick={() => navigate('/rutas')}>
              Gestionar Rutas
            </button>
            <button className='btns' onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Inisesion;
