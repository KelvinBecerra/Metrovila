import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../app';
import { signOut } from 'firebase/auth';
import { auth } from '../pages/Firebase.js'; 
import "/src/index.css";

function Rutas() {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    scroll(0, 0);
  };

  return (
    <header>
      {user ? (
        <button className='btns' onClick={logout}>SignOut</button>
      ) : (
        <p className="tipografia">Debe Iniciar Sesión para reservar!</p>
      )}
      
      {/* TODOS LOS LINKS SON NUEVOS, SON PARA REDIRIGIR A UNA PÁGINA A DETALLE */}
      <Link to="/">
        <button className="btn-regresar">Regresar</button>
      </Link>

      <div className="routes">
        {/* Aquí hacemos que cada ruta tenga un enlace a su página de detalle */}
        <div className="route-card">
          <Link to="/rutas/sabas-nieves">
            <img src="src/assets/SabasNieves.jpg" alt="Sabas Nieves"/>
            <h3>Sabas Nieves</h3>
          </Link>
          <p className="tipografia">⭐ 5.0</p>
          <p className="tipografia">Dificultad: Media</p>
          <p className="tipografia">Duración: 2 horas</p>
          <p className="tipografia">$10 por persona</p>
        </div>

        <div className="route-card">
          <Link to="/rutas/la-julia">
            <img src="src/assets/LaJulia.jpg" alt="La Julia"/>
            <h3>La Julia</h3>
          </Link>
          <p className="tipografia">⭐ 4.5</p>
          <p className="tipografia">Dificultad: Fácil</p>
          <p className="tipografia">Duración: 30 minutos</p>
          <p className="tipografia">$5 por persona</p>
        </div>

        <div className="route-card">
          <Link to="/rutas/pico-naiguata">
            <img src="src/assets/PicoNaiguata.jpg" alt="Pico Naiguata"/>
            <h3>Pico Naiguata</h3>
          </Link>
          <p className="tipografia">⭐ 3.7</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 6 horas</p>
          <p className="tipografia">$25 por persona</p>
        </div>

        <div className="route-card">
          <Link to="/rutas/humboldt">
            <img src="src/assets/Humboldt.jpg" alt="Humboldt"/>
            <h3>Humboldt</h3>
          </Link>
          <p className="tipografia">⭐ 4.7</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 3 horas</p>
          <p className="tipografia">$15 por persona</p>
        </div>

        <div className="route-card">
          <Link to="/rutas/el-eden">
            <img src="src/assets/ElEden.jpg" alt="El Edén"/>
            <h3>El Edén</h3>
          </Link>
          <p className="tipografia">⭐ 2.0</p>
          <p className="tipografia">Dificultad: Fácil</p>
          <p className="tipografia">Duración: 15 minutos</p>
          <p className="tipografia">$3 por persona</p>
        </div>

        <div className="route-card">
          <Link to="/rutas/piedra-del-indio">
            <img src="src/assets/PiedraDelIndio.jpg" alt="Piedra del Indio"/>
            <h3>Piedra del Indio</h3>
          </Link>
          <p className="tipografia">⭐ 5.0</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 2 horas</p>
          <p className="tipografia">$10 por persona</p>
        </div>
      </div>
    </header>
  );
}

export default Rutas;
