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
  return (
    <header>
      {user ? ( <button onClick={logout}>SignOut</button> ) :
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
