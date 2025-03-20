import React from 'react'
import logo from '../assets/metrovilalogo.jpg'
import { useContext } from 'react'
import { UserContext } from '../app'
import { signOut } from 'firebase/auth'
import { auth } from '../pages/Firebase.js'; 
//componente Header
//funcion para cerrar sesion
function Header() {
  const {user,setUser} = useContext(UserContext)

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    scroll(0, 0);
    
};
//verificar tambien que cuando se le click a la ruta, siga iniciada la sesion
//tambien se pueda registrar el usuario con el formulario y de esa manera tambien se pueda registrar en la pagina


//con user.displayName se puede acceder al nombre del usuario
//lo primero que se encuentra es un condicional que verifica si el usuario esta logeado o no
//si esta logeado se muestra un boton de cerrar sesion y el nombre del usuario
// aqui es donde se podria usar que tipo de usuario es
// y dependiendo de que tipo de usuario sea, se mostrara una informacion distinta
//si no esta logeado se muestra un boton de iniciar sesion y un boton de registrarse
return (
    <header>
      
      {user ? (<div className='header-buttons'>
         <p className='holauser'>Hola, {user.displayName}</p>
          <button className='btns' onClick={logout}>SignOut</button></div> ) :
       (<div className="header-buttons">
        <a href='/formulario'>
          <button className="btn ">Registrar</button>
        </a>
        <a href="/iniciosesion">
        <button className="btn ">Iniciar Sesion</button>

        </a>
      </div>)}

      
      <div className="logo">
        <img id="logo" src={logo} alt="Logo" />{/*Aqui es donde se esta importando el logo*/}
      </div>
    </header>
  )
}

export default Header
