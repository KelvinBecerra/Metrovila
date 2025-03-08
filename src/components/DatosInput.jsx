import React from 'react';
import { provider,auth } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth'

function DatosInput() {
  const [loading, setLoading] = useState(false);
    
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  

  const loginPopupGoogle = async () => {
    setLoading(true);
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
        const user = await signInWithPopup(auth, provider);

        // console.log(user);

        setError(null);
        setLoading(false);
        navigate("/")

        scroll(0, 0);
        location.reload();
    } catch (error) {
        console.log(error.message);

        setError(error.message);
        setLoading(false);
        }
    };


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
      </form>
      <button  className='botoncitosini' onClick={loginPopupGoogle}>Google</button>

      <div id='botongoogleform'>      
      </div>
      
    </>
   
  );
}

export default DatosInput;
