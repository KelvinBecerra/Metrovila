import React from 'react';
import { provider,auth,db  } from '../pages/Firebase.js';
import { useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { signInWithPopup } from 'firebase/auth'
import { collection, doc, query, getDocs,setDoc, where } from 'firebase/firestore';
import{createUserWithEmailAndPassword,updateProfile,getAuth} from 'firebase/auth';
import { UserContext } from '../app.jsx';
import { Link } from 'react-router-dom';
import usuarioImg from '../assets/usuario.png';

function DatosInput() {
  //declaracion de las variables a usar
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [nombre,setnombre]=useState('');
  const [apellido,setapellido]=useState('');
  const [correo,setcorreo]=useState('');  
  const [contrasena,setcontrasena]=useState('');
  const navigate = useNavigate();
  //funcion que se encarga de registrar al usuario
  //en la base de datos de firebase(firestore)
  //comprueba que la contrasena sea mayor a 6 caracteres
  //se usa un metodo async await para hacerlo
  // es un metodo que se encarga de esperar a que se cumpla una promesa
  //para ejecutarse
  const handleSignup = async (event) => {
    event.preventDefault();
    
    try {
        setLoading(true);
        
        if (contrasena.length < 6) {
            alert("Contraseña muy corta");
            setLoading(false);
            return;
        }

        // verificar si el usuario ya está en Firestore
        const usersRef = collection(db, "usuarios");
        const q = query(usersRef, where("correo", "==", correo));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            alert("El usuario ya está registrado");
            setLoading(false);
            return;
        }

        // registrar en Firebase Authentication
        const registradito = await createUserWithEmailAndPassword(auth, correo, contrasena);
        const user = registradito.user;

        // actualizar el perfil del usuario
        await updateProfile(user, { displayName: `${nombre} ${apellido}` });

        // guardar el usuario en Firestore
        await setDoc(doc(db, "usuarios", user.uid), {
            uid: user.uid,
            nombre,
            apellido,
            correo,
            creadoEn: new Date()
        });
        //setea al usuario y navega hasta home con el usuario registrado
        setUser(user);
        navigate("/");

        alert("Usuario registrado con éxito");

    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            alert("Este correo ya está registrado en Firebase Authentication.");
        } else {
            console.error("Error al registrar el usuario:", error);
            alert("Hubo un error al registrar el usuario.");
        }
    } finally {
        setLoading(false);
    }
};
//funcion encargada de logear al usuario con google
//y redireccionar a la pagina principal
//navigate es una funcion que redirecciona a la pagina principal
//scroll es una funcion que se encarga de llevar al usuario al inicio de la pagina
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

//onChange es un evento que se dispara cada vez que el input cambia de valor
//el onSubmit en el form se dispara cuando se envia el formulario
//la etiqueta Link se usa para enlazar a otra pagina sin necesidad de recargar la pagina
  return (
    <>
      <div id='imagenuserdiv'>
      <img src={usuarioImg} alt="usuarioimg" />

      </div>

    <div className='form=container'>
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
      </div>
      <Link to="/">
        <button id='homecito'>home</button>
      </Link>
      <button  className='botoncitosini' onClick={loginPopupGoogle}>Ingresa por Google</button>

      <div id='botongoogleform'>      
      </div>
    </>
   
  );
}

export default DatosInput;
