import React from 'react'
import logo from '../assets/metrovilalogo.jpg'
import { useContext } from 'react'
import { UserContext } from '../app'
import { signOut } from 'firebase/auth'
import { auth } from '../pages/Firebase.js'; 
//componente Header
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
return (
    <header>
      
      {user ? (<div className='header-buttons'>
         <p className='holauser'>Hola, {user.displayName}</p>
          <button className='btns' onClick={logout}>SignOut</button></div> ) :
       (<div class="header-buttons">
        <a href='/formulario'>
          <button class="btn ">Registrar</button>
        </a>
        <a href="/iniciosesion">
        <button class="btn ">Iniciar Sesion</button>

        </a>
      </div>)}

      
      <div class="logo">
        <img id="logo" src={logo} alt="Logo" />{/*Aqui es donde se esta importando el logo*/}
      </div>
    </header>
  )
}

export default Header
