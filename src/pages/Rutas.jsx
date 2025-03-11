import React, { useContext } from 'react';
import { UserContext } from '../app';
import { signOut } from 'firebase/auth';
import { auth } from '../pages/Firebase.js'; 
import { Link } from 'react-router-dom';
import "/src/index.css";

function Rutas() {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    await signOut(auth);
    setUser(null); // Actualiza el valor de user en el contexto
    scroll(0, 0);
  };

  return (
    <header>
      {user ? (
        <>
          <p>ya fue iniciado</p>
          <button onClick={logout}>SignOut</button>
        </>
      ) : (
        <p className="tipografia"> Debe Iniciar Sesion para reservar!</p>
      )}
      <Link to="/">
        <button class="btn-regresar"> Regresar</button>
      </Link>
      
      <div class="routes">
            <div class="route-card">
        <img src="src/assets/SabasNieves.jpg" alt="Sabas Nieves"/>
          <h3>Sabas Nieves</h3>
          <p className="tipografia">⭐ 5.0</p>
          <p className="tipografia">Dificultad: Media</p>
          <p className="tipografia">Duración: 2 horas</p>
          <p className="tipografia">$10 por persona</p>
        </div>
        <div class="route-card">
          <img src="src/assets/LaJulia.jpg" alt="La Julia"/>
          <h3>La Julia</h3>
          <p className="tipografia">⭐ 4.5</p>
          <p className="tipografia">Dificultad: Fácil</p>
          <p className="tipografia">Duración: 30 minutos</p>
          <p className="tipografia">$5 por persona</p>
        </div>
        <div class="route-card">
          <img src="src/assets/PicoNaiguata.jpg" alt="Pico Naiguata"/>
          <h3>Pico Naiguata</h3>
          <p className="tipografia">⭐ 3.7</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 6 horas</p>
          <p className="tipografia">$25 por persona</p>
        </div>
        <div class="route-card">
          <img src="src/assets/Humboldt.jpg" alt="Humboldt"/>
          <h3>Humboldt</h3>
          <p className="tipografia">⭐ 4.7</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 3 horas</p>
          <p className="tipografia">$15 por persona</p>
        </div>
        <div class="route-card">
          <img src="src/assets/ElEden.jpg" alt="El Edén"/>
          <h3>El Edén</h3>
          <p className="tipografia">⭐ 2.0</p>
          <p className="tipografia">Dificultad: Fácil</p>
          <p className="tipografia">Duración: 15 minutos</p>
          <p className="tipografia">$3 por persona</p>
        </div>
        <div class="route-card">
          <img src="src/assets/PiedraDelIndio.jpg" alt="Piedra del Indio"/>
          <h3>Piedra del Indio</h3>
          <p className="tipografia">⭐ 5.0</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 2 horas</p>
          <p className="tipografia">$10 por persona</p>
        </div>
        <div class="container-show-more">
        <button class="show-more">Mostrar más</button>
      </div>
      </div>
    </header>
  );
}

export default Rutas;
