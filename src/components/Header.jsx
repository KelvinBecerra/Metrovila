import React from 'react'
import logo from '../assets/metrovilalogo.jpg'

function Header() {
  return (
    <header>
      <div class="header-buttons">
        <button class="btn ">Registrar</button>
        <button class="btn ">Iniciar Sesion</button>
      </div>
      <div class="logo">
        <img id="logo" src={logo} alt="Logo" />{/*comentarios en react*/}
      </div>
    </header>
  )
}

export default Header
