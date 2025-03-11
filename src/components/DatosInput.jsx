import React from 'react';
import { provider, auth } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import HumboldtImage from '../assets/Humboldt.png'; // Importa la imagen

function DatosInput() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginPopupGoogle = async () => {
    setLoading(true);
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const user = await signInWithPopup(auth, provider);

      setError(null);
      setLoading(false);
      navigate("/");

      scroll(0, 0);
      location.reload();
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container-registro">
      <div className="form-container">
        <form id='formReg'>
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre' />
          </div>
          <div className="input-group">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id='apellido' />
          </div>
          <div className="input-group">
            <label htmlFor="correo">Correo</label>
            <input type="text" id='correo' />
          </div>
          <div className="input-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input type="text" id='contrasena' />
          </div>
          <div className="input-group">
            <label htmlFor="confirmar">Confirmación</label>
            <input type="text" id='confirmar' />
          </div>
        </form>

        <button className='botoncitosini' onClick={loginPopupGoogle}>Continuar con Google</button>
      </div>
      <div className="image-container">
        <img src={HumboldtImage} alt="Humboldt" className="humboldt-image" /> {/* Usa la imagen importada */}
      </div>
    </div>
  );
}

export default DatosInput;