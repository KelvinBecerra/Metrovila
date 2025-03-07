import React from 'react';
import { call_login_google } from '../pages/Firebase.js';

function DatosInput() {
  return (
    <>
      <form id='formReg' action="">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id='nombre' />
        <br />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id='apellido' />
        <br />
        <label htmlFor="correo">Correo</label>
        <input type="text" id='correo' />
        <br />
        <label htmlFor="contrasena">Contraseña</label>
        <input type="text" id='contrasena' />
        <br />

        <label htmlFor="confirmar">Confirmacion</label>
        <input type="text" id='confirmar' />
        <br />
        <button  className='botoncitosini' onClick={call_login_google}>Google</button>
      </form>
      <div id='botongoogleform'>      
      </div>
      
    </>
   
  );
}

export default DatosInput;
