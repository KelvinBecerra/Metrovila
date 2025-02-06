import { useState } from 'react'
import logo from './assets/metrovilalogo.jpg'
import avilafondo from './assets/avila.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div class="header-buttons">
          <button class="btn ">Registrar</button>
          <button class="btn ">Iniciar Sesion</button>
      </div>
      <div class="logo">
          <img id="logo" src={logo} alt="Logo" />{/*comentarios en react*/}
      </div>
      </header>
      <div class="bienvenida">
        <h1>Bienvenidos a Metrovila</h1>
      </div>
      <div class="bienvenida p ">
        <p>La Universidad Metropolitana,a través de su Decanato Estudiantil y el Proyecto Ávila, se compromete a promover un estilo de vida activo y saludable entre sus estudiantes, con el objetivo de fomentar la participación en actividades recreativas y de esparcimiento que contribuyan al bienestar físico y emocional de la comunidad universitaria.
        </p>
      </div>
      <div class="mision">
        <h1>Mision y vision </h1>
      </div>
      <div id="parrafo">
        <p>Nuestro proyecto aspira a crear un portal de referencia para los estudiantes de la Universidad Metropolitana, mediante una plataforma digital innovadora que facilite la organización de excursiones. Proporcionaremos información detallada sobre rutas y actividades, fomentando la conservación del medio ambiente y ofreciendo un espacio interactivo para compartir experiencias y recomendaciones.</p>
      </div>
      <button id="ruta">Ver Rutas</button>
      <div class="contacto">
        <p>Contactanos</p>
        <p>0212-2521999</p>
        <p>0416-2513992</p>
        <p>© 2025 Metrovila Privacidad Terminos</p>
        <p></p>
        <p></p>
      </div>
    </>
  )
}

export default App
