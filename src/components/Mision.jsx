import React from 'react'
import { Link } from 'react-router-dom'

function Mision() {
  return (
    <>
    <div className="mision">
      <h1>Mision y vision </h1>
    </div>
    <div id="parrafo">
      <p>Nuestro proyecto aspira a crear un portal de referencia para los estudiantes de la Universidad Metropolitana, mediante una plataforma digital innovadora que facilite la organización de excursiones. Proporcionaremos información detallada sobre rutas y actividades, fomentando la conservación del medio ambiente y ofreciendo un espacio interactivo para compartir experiencias y recomendaciones.</p>
    </div>
    <Link to={"/rutas"} id="rutaid" >
    <button  className="ruta">Ver Rutas</button>
    </Link>
    </>

  )
}

export default Mision
