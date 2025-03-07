import React from 'react'
import logo from '../assets/metrovilalogo.jpg'

function Header() {
  return (
    <header>
      <div class="header-buttons">
        <a href='/Formulario'>
          <button class="btn ">Registrar</button>
        </a>
        <a href="/iniciosesion">
        <button class="btn ">Iniciar Sesion</button>

        </a>
      </div>
      <div class="logo">
        <img id="logo" src={logo} alt="Logo" />{/*Aqui es donde se esta importando el logo*/}
      </div>
    </header>
  )
}

export default Header
