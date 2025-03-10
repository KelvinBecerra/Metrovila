import React, {useContext} from 'react'
import { UserContext } from '../app'
import { signOut } from 'firebase/auth'
import { auth } from '../pages/Firebase.js'; 
import { Link } from 'react-router-dom';
function Rutas() {

  const {user,setUser} = useContext(UserContext)

  const logout = async () => {
    await signOut(auth);
    setUser(null); // Actualiza el valor de user en el contexto
    scroll(0, 0);
  };
  
  return (
    <header>
    {user ? (
      <>
        <p>ya fue iniciado</p>
        <button onClick={logout}>SignOut</button>
      </>
    ) : (
      <p>no ha iniciado</p>
    )}
    <p>prueba</p>
    <Link to="/">
      <button>regreso</button>
    </Link>
  </header>
    
  )
}

export default Rutas
