import React from 'react'
import logo from '../assets/metrovilalogo.jpg'
//el header de la pagina
// es lo que esta arriba
function HeaderForm() {
  return (
    <>
        <header className='headerform'>
            <div className='logoform'>
            <img id="logoform" src={logo} alt="Logo" />
            </div>
        </header>
      
    </>
  )
}

export default HeaderForm
