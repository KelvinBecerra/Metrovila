import React from 'react';
<<<<<<< HEAD
import { provider,auth,db  } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import{createUserWithEmailAndPassword,updateProfile,getAuth} from 'firebase/auth';
import { UserContext } from '../app.jsx';

=======
import { provider, auth } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import HumboldtImage from '../assets/Humboldt.png'; // Importa la imagen
>>>>>>> ChristianG

function DatosInput() {
  //declaracion de las variables a usar
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [error, setError] = useState(null); 
  const [nombre,setnombre]=useState('');
  const [apellido,setapellido]=useState('');
  const [correo,setcorreo]=useState('');  
  const [contrasena,setcontrasena]=useState('');
  const navigate = useNavigate();
  
  const handleSignup=async(event)=>{
    event.preventDefault();
    
    try {
      setLoading(true);
      if(contrasena.length<6){
        alert("Contraseña muy corta");
        setLoading(false);
        return;
      }
      
    const registradito = await createUserWithEmailAndPassword(auth, correo, contrasena);
    const user = registradito.user;
      // Guarda el usuario en el contexto
    
    // Actualiza el perfil del usuario con el nombre y apellido
    await updateProfile(user, {
      displayName: `${nombre} ${apellido}`
    });
    setUser(user);
    
    //location.reload() recarga toda la página, 
    // lo que provoca que el estado de la aplicación se restablezca y
    //  se pierdan los cambios realizados
    // Guarda los datos del usuario en Firestore
    //la variable que almacena la base de datos se llama db, ahi es donde se almacenara la info
=======
  const [error, setError] = useState(null);
  const navigate = useNavigate();
>>>>>>> ChristianG

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid
    });
      

      
      setError(null)
      setLoading(false);
      navigate("/");
      scroll(0, 0);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  }
//funcion encargada de logear al usuario con google
//y redireccionar a la pagina principal
  const loginPopupGoogle = async () => {
    setLoading(true);
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
<<<<<<< HEAD
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setUser(user); // Actualiza el valor de user en el contexto

      setError(null);
      setLoading(false);
      navigate("/");

      scroll(0, 0);
    } catch (error) {
      console.log(error.message);

=======
      const user = await signInWithPopup(auth, provider);

      setError(null);
      setLoading(false);
      navigate("/");

      scroll(0, 0);
      location.reload();
    } catch (error) {
      console.log(error.message);
>>>>>>> ChristianG
      setError(error.message);
      setLoading(false);
    }
  };

//onChange es un evento que se dispara cada vez que el input cambia de valor
  return (
<<<<<<< HEAD
    <>
      <form id='formReg' action="" onSubmit={handleSignup}>
        <label htmlFor="nombre" >Nombre</label>
        <input value={nombre} type="text" id='nombre' onChange={(e) => setnombre(e.target.value)} />
        <br />
        <label htmlFor="apellido">Apellido</label>
        <input value={apellido} type="text" id='apellido' onChange={(e) => setapellido(e.target.value)}/>
        <br />
        <label htmlFor="correo">Correo</label>
        <input value={correo} type="text" id='correo' onChange={(e)=>setcorreo(e.target.value)} />
        <br />
        <label htmlFor="contrasena">Contraseña</label>
        <input value={contrasena} type="password" id='contrasena' onChange={(e) => setcontrasena(e.target.value)}/>
        
        <br />
        <button type='submit'>Registrar</button>
      </form>
      <button  className='botoncitosini' onClick={loginPopupGoogle}>Google</button>

      <div id='botongoogleform'>      
=======
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
>>>>>>> ChristianG
      </div>
      <div className="image-container">
        <img src={HumboldtImage} alt="Humboldt" className="humboldt-image" /> {/* Usa la imagen importada */}
      </div>
    </div>
  );
}

export default DatosInput;