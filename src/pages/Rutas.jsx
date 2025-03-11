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
        <p>no ha iniciado</p>
      )}
      <p>prueba</p>
      <Link to="/">
        <button>regreso</button>
      </Link>
      
      {/* Aquí comenzamos la sección de rutas */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px' }}>
        <img src="src/assets/SabasNieves.jpg" alt="Sabas Nieves" className="imagen-ruta" />
          <h3>Sabas Nieves</h3>
          <p>⭐ 5.0</p>
          <p>Dificultad: Media</p>
          <p>Duración: 2 horas</p>
          <p>$10 por persona</p>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px' }}>
          <img src="src/assets/LaJulia.jpg" alt="La Julia" className="imagen-ruta"/>
          <h3>La Julia</h3>
          <p>⭐ 4.5</p>
          <p>Dificultad: Fácil</p>
          <p>Duración: 30 minutos</p>
          <p>$5 por persona</p>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px' }}>
          <img src="src/assets/PicoNaiguata.jpg" alt="Pico Naiguata" className="imagen-ruta"/>
          <h3>Pico Naiguata</h3>
          <p>⭐ 3.7</p>
          <p>Dificultad: Alta</p>
          <p>Duración: 6 horas</p>
          <p>$25 por persona</p>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px' }}>
          <img src="src/assets/Humboldt.jpg" alt="Humboldt" className="imagen-ruta"/>
          <h3>Humboldt</h3>
          <p>⭐ 4.7</p>
          <p>Dificultad: Alta</p>
          <p>Duración: 3 horas</p>
          <p>$15 por persona</p>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px' }}>
          <img src="src/assets/ElEden.jpg" alt="El Edén" className="imagen-ruta"/>
          <h3>El Edén</h3>
          <p>⭐ 2.0</p>
          <p>Dificultad: Fácil</p>
          <p>Duración: 15 minutos</p>
          <p>$3 por persona</p>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px' }}>
          <img src="src/assets/PiedraDelIndio.jpg" alt="Piedra del Indio" className="imagen-ruta"/>
          <h3>Piedra del Indio</h3>
          <p>⭐ 5.0</p>
          <p>Dificultad: Alta</p>
          <p>Duración: 2 horas</p>
          <p>$10 por persona</p>
        </div>
        <div class="mostrar-mas-container">
        <button class="show-more">Mostrar más</button>
      </div>
      </div>
    </header>
  );
}

export default Rutas;
