import Bienvenida from '../components/Bienvenida'
import Mision from '../components/Mision'
function Home() {
  return (
    <>
      <Bienvenida/>
      <Mision/>
      <a href="/iniciosesion">
        <button>boton de iniciado</button>
      </a>
    </>
  )
}

export default Home
