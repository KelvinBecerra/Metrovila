import React from 'react';
import { provider,auth,db } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import{getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
function DatosInput() {
  //declaracion de las variables a usar
  const [loading, setLoading] = useState(false);
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
      const registradito=await createUserWithEmailAndPassword(auth,correo, contrasena)
      if(contrasena.length<6){
        alert("Contrasena muy corta")
      }
      console.log(registradito,correo)
      


      setError(null)
      setLoading(false);
      navigate("/");
      scroll(0, 0);
      location.reload();
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  }

  const loginPopupGoogle = async () => {
    setLoading(true);
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
        const result = await signInWithPopup(auth, provider);
        const {user} = result;
        await setDoc(doc(db, 'usuarios', user.uid), {
          nombre: user.displayName,
          correo: user.email
        });
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

//onChange es un evento que se dispara cada vez que el input cambia de valor
  return (
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
      </div>
      
    </>
   
  );
}

export default DatosInput;
