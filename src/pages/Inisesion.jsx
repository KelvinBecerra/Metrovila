import React from 'react';
import imagen from '../assets/imgusuario.png';
import { provider,auth } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth'
function Inisesion() {


  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const loginPopupGoogle = async () => {
        setLoading(true);
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const user = await signInWithPopup(auth, provider);
            
            //console.log(user);

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
        <a href='/formulario'>
            
            <button className='botoncitos'>¿No tiene usuario?  Resgistrarse </button>
        </a>
          <button className='botoncitos'>Has olvidado tu contraseña</button>
          </div>
          

          <button className='botoncitomain'>Iniciar Sesion</button>
          <a href="/">
          <button className='botoncitosini'>Inicio</button>
          </a>
          
          
            <button className='botoncitosini' onClick={loginPopupGoogle}>Google</button>
          
          
      </div>
      
    </>
  )
}

export default Inisesion 
