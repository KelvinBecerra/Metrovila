import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
/**Molde de las paginas de inicio 
 * cuando sea un nuevo usuario
 * y cuando ya este registrado
 * se le agrega el componente header outlet y footer
 * outlet se usa para marcar el contenido de los hijos
 * permite que se le pueda asignar los valores respectivos de cada pagina
 * 
 */
function Moldepages() {
  return (
    <>

      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Moldepages
