import React from 'react'
import logo from '../assets/metrovilalogo.jpg'

function Header() {
  return (
    <header>
      <div class="header-buttons">
        <a href='/formulario'>
          <button class="btn ">Registrar</button>
        </a>
        <a href="/iniciosesion">
        <button class="btn ">Iniciar Sesion</button>

        </a>
      </div>
      <div class="logo">
        <img id="logo" src={logo} alt="Logo" />{/*comentarios en react*/}
      </div>
    </header>
  )
}

export default Header
