import React, { useContext, useState } from 'react';
import { UserContext } from '../app';
import { signOut } from 'firebase/auth';
import { auth } from '../pages/Firebase.js';
import { Link, useNavigate } from 'react-router-dom';
import { upload } from '../Supabase/SupabaseClient.js';
import { useEffect } from 'react';
import "/src/index.css";

function Rutas() {
  const [images, setImages] = useState({});
  const [cupos, setCupos] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // Verificar si el usuario es administrador
  const isAdmin = user?.isAdmin;

  const getPublicImageUrl = (fileName) => {
    const { data, error } = upload.storage.from('metrovilabucket').getPublicUrl(fileName);
    if (error) {
      console.error('Error al obtener la URL pública:', error);
      return null;
    }
    return data.publicUrl;
  };

  useEffect(() => {
    const fetchImageUrls = async () => {
      const fileNames = [
        'PicoNaiguata.jpg',
        'SabasNieves.png',
        'LaJulia.jpg',
        'Humboldt.jpg',
        'ElEden.jpg',
        'PiedraDelIndio.jpg',
      ];

      try {
        const imageUrls = await Promise.all(
          fileNames.map(async (fileName) => ({
            [fileName]: getPublicImageUrl(fileName),
          }))
        );
        const formattedUrls = Object.assign({}, ...imageUrls);
        setImages(formattedUrls);
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    fetchImageUrls();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    scroll(0, 0);
  };

  const handleRouteClick = () => {
    if (isAdmin) {
      const modificar = confirm('¿Desea modificar esta ruta?');
      if (modificar) {
        navigate('/editar-ruta');
        return;
      }
    }
    const cuposSeleccionados = prompt('¿Cuántos cupos desea reservar?');
    if (cuposSeleccionados && !isNaN(cuposSeleccionados)) {
      setCupos(Number(cuposSeleccionados));
      navigate('/pago', { state: { cupos: cuposSeleccionados } });
    } else {
      alert('Por favor, ingrese un número válido.');
    }
  };

  const filteredRoutes = [
    { name: 'Sabas Nieves', image: 'SabasNieves.png', difficulty: 'Media', duration: '2 horas', price: '$10 por persona', rating: '⭐ 5.0' },
    { name: 'La Julia', image: 'LaJulia.jpg', difficulty: 'Fácil', duration: '30 minutos', price: '$5 por persona', rating: '⭐ 4.5' },
    { name: 'Pico Naiguatá', image: 'PicoNaiguata.jpg', difficulty: 'Alta', duration: '6 horas', price: '$25 por persona', rating: '⭐ 3.7' },
    { name: 'Humboldt', image: 'Humboldt.jpg', difficulty: 'Alta', duration: '3 horas', price: '$15 por persona', rating: '⭐ 4.7' },
    { name: 'El Edén', image: 'ElEden.jpg', difficulty: 'Fácil', duration: '15 minutos', price: '$3 por persona', rating: '⭐ 2.0' },
    { name: 'Piedra del Indio', image: 'PiedraDelIndio.jpg', difficulty: 'Alta', duration: '2 horas', price: '$10 por persona', rating: '⭐ 5.0' },
  ].filter((route) =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Route = () => (
    <div className="routes">
      {filteredRoutes.map((route, index) => (
        <div key={index} className="route-card" onClick={handleRouteClick}>
          <img src={images[route.image]} alt={route.name} />
          <h3>{route.name}</h3>
          <p className="tipografia">{route.rating}</p>
          <p className="tipografia">Dificultad: {route.difficulty}</p>
          <p className="tipografia">Duración: {route.duration}</p>
          <p className="tipografia">{route.price}</p>
        </div>
      ))}
      <div className="container-show-more">
        <button className="show-more">Mostrar más</button>
      </div>
    </div>
  );

  return (
    <header>
      {user ? (
        <>
          <button className='btns' onClick={logout}>SignOut</button>
        </>
      ) : (
        <p className="tipografia">Debe Iniciar Sesión para reservar!</p>
      )}
      <input
        type="text"
        placeholder="Buscar rutas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <Link to="/">
        <button className="btn-regresar">Regresar</button>
      </Link>
      <Route />
    </header>
  );
}

export default Rutas;
