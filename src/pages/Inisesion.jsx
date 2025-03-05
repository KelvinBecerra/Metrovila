import React from 'react';
import imagen from '../assets/imgusuario.png';
import { call_login_google } from '../pages/Firebase.js';

function Inisesion() {
  
  return (
    
    <>
      <div  className='imagenuser-div'> 
        <h1 id='sesion'>Inicio de Sesion</h1>
    
         <img className='imagenuser' src={imagen} alt="usuario" />
      </div>
      <div className='inisesion-div'>
          <label className='labelcitos' htmlFor="correo">Email</label>
          <input className='inputcito' id='correo' type="email" />
          <label className='labelcito' id='password' htmlFor="">  Contrasena</label>
          <input className='inputcito' type="password" />
          <div className='containerboton'>
            <button className='botoncitos'>¿No tiene usuario?  Resgistrarse </button>
          <button className='botoncitos'>Has olvidado tu contraseña</button>
          </div>
          

          <button className='botoncitomain'>Iniciar Sesion</button>
          <a href="/">
          <button className='botoncitosini'>Inicio</button>
          </a>
          
            <button className='botoncitosini' onClick={call_login_google}>Google</button>
          
          
      </div>
      
    </>
  )
}

export default Inisesion
