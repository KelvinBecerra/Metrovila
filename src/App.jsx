import { useState } from 'react'
import Header from './components/Header'
import avilafondo from './assets/avila.jpg'
import Footer from './components/Footer'
import Bienvenida from './components/Bienvenida'
import Mision from './components/Mision'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Bienvenida/>
      <Mision/>
      <Footer/>
      
    </>
  )
}

export default App
