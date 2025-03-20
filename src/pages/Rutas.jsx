import React, { useContext, useState } from 'react';
import { UserContext } from '../app';
import { signOut } from 'firebase/auth';
import { auth } from '../pages/Firebase.js'; 
import { Link } from 'react-router-dom';
import { upload } from '../Supabase/SupabaseClient.js';
import { useEffect } from 'react';
import "/src/index.css";

function Rutas() {

  //funcion para obtener el url de las imagenes
  
  const getPublicImageUrl = (fileName)=> {
      const { data, error } =  upload
          .storage
          .from('metrovilabucket')
          .getPublicUrl(fileName);
  
      if (error) {
          console.error('Error al obtener la URL pública:', error);
          return null;
      }
      return data.publicUrl;
  };
  //------------------------------------
  //es un componente funciona;
  //son funciones en js que retornan jsx para renderizar en la pantalla
  const [images, setImages] = useState({});

  // useEffect para cargar las URLs al montar

  //esta funcion busca el url de las imagenes y las guarda en el estado
  //seteando ek estado de images
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

      const imageUrls = await Promise.all(
        fileNames.map(async (fileName) => ({
          [fileName]: getPublicImageUrl(fileName),
        }))
      );
      try {
        const imageUrls = await Promise.all(
          fileNames.map(async (fileName) => ({
            [fileName]: getPublicImageUrl(fileName),
          }))
        );
  
        const formattedUrls = Object.assign({}, ...imageUrls);
        setImages(formattedUrls);
        console.log('Image URLs fetched successfully:', formattedUrls);
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    fetchImageUrls();

  }, []);

    
  //------------------------------------
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    await signOut(auth);
    setUser(null); // Actualiza el valor de user en el contexto
    scroll(0, 0);
  };
// es un subcomponente que se encarga de renderizar y organizar lo que se va a mostrar por el navegador
  const Route=()=>(
    
      <div className="routes">
        <div className="route-card">
          <img src={images['SabasNieves.png']} alt="Sabas Nieves" /> 
           <h3>Sabas Nieves</h3>
          <p className="tipografia">⭐ 5.0</p>
          <p className="tipografia">Dificultad: Media</p>
          <p className="tipografia">Duración: 2 horas</p>
          <p className="tipografia">$10 por persona</p>
        </div>
        
        <div class="route-card">
        <img src={images['LaJulia.jpg']} alt="La Julia" /> 

          <h3>La Julia</h3>
          <p className="tipografia">⭐ 4.5</p>
          <p className="tipografia">Dificultad: Fácil</p>
          <p className="tipografia">Duración: 30 minutos</p>
          <p className="tipografia">$5 por persona</p>
        </div>
        <div class="route-card">
        <img src={images['PicoNaiguata.jpg']} alt="Pico Naiguata" /> 

          <h3>Pico Naiguata</h3>
          <p className="tipografia">⭐ 3.7</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 6 horas</p>
          <p className="tipografia">$25 por persona</p>
        </div>
        <div class="route-card">
        <img src={images['Humboldt.jpg']} alt="Humboldt" /> 

          <h3>Humboldt</h3>
          <p className="tipografia">⭐ 4.7</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 3 horas</p>
          <p className="tipografia">$15 por persona</p>
        </div>
        <div class="route-card">

          <img src={images["ElEden.jpg"]} alt="El Edén"/>
          <h3>El Edén</h3>
          <p className="tipografia">⭐ 2.0</p>
          <p className="tipografia">Dificultad: Fácil</p>
          <p className="tipografia">Duración: 15 minutos</p>
          <p className="tipografia">$3 por persona</p>
        </div>
        <div class="route-card">
          <img src={images['PiedraDelIndio.jpg']} alt="Piedra del Indio"/>
          <h3>Piedra del Indio</h3>
          <p className="tipografia">⭐ 5.0</p>
          <p className="tipografia">Dificultad: Alta</p>
          <p className="tipografia">Duración: 2 horas</p>
          <p className="tipografia">$10 por persona</p>
        </div>
        <div className="container-show-more">
        <button className="show-more">Mostrar más</button>
      </div>
      </div>
  );
//donde dice user? se refiere a una pregunta donde se retorna true o false
//si es verdad se hara lo que esta antes de los : y si es falso se hace lo que esta despues
//solo falta aplicarle diseno
//las imagenes no se suben porque vercel no deja subir imagenes
//le pregunte al preparador y me recomendo esto
//supabase para las imagenes, se crea un bucket
// ahi se suben las imagenes y se generara un url
//lo pegan en el src de las imagenes
// y aparecera
  return (
    <header>
      {user ? (
        <>
          <button className='btns' onClick={logout}>SignOut</button>
        </>
      ) : (
        <p className="tipografia"> Debe Iniciar Sesion para reservar!</p>
      )}
      <Link to="/">
        <button className="btn-regresar"> Regresar</button>
      </Link>
      <Route/>
    </header>
  );
}

export default Rutas;