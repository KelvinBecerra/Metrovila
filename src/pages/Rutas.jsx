import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../app';
import { signOut } from 'firebase/auth';
import { auth } from '../pages/Firebase.js'; 
import { upload } from '../Supabase/SupabaseClient.js';
import HeaderMain from '/src/components/HeaderMain';
import "/src/index.css";
import Footer from '/src/components/Footer';

function Rutas() {
    const [searchTerm, setSearchTerm] = useState('');
    const [images, setImages] = useState({});
    const { user, setUser  } = useContext(UserContext);

    // Función para obtener el URL de las imágenes
    const getPublicImageUrl = (fileName) => {
        const { data, error } = upload.storage.from('metrovilabucket').getPublicUrl(fileName);
        if (error) {
            console.error('Error al obtener la URL pública:', error);
            return null;
        }
        return data.publicUrl;
    };

    // useEffect para cargar las URLs al montar
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

            const formattedUrls = Object.assign({}, ...imageUrls);
            setImages(formattedUrls);
            console.log('Image URLs fetched successfully:', formattedUrls);
        };

        fetchImageUrls();
    }, []);

    const logout = async () => {
        await signOut(auth);
        setUser (null); // Actualiza el valor de user en el contexto
        scroll(0, 0);
    };

    // Manejar el cambio en el input de búsqueda
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    // Filtrar rutas basadas en el término de búsqueda
    const filteredRoutes = [
        { name: 'Sabas Nieves', image: images['SabasNieves.png'] },
        { name: 'La Julia', image: images['LaJulia.jpg'] },
        { name: 'Pico Naiguata', image: images['PicoNaiguata.jpg'] },
        { name: 'Humboldt', image: images['Humboldt.jpg'] },
        { name: 'El Edén', image: images['ElEden.jpg'] },
        { name: 'Piedra del Indio', image: images['PiedraDelIndio.jpg'] },
    ].filter(route => 
        route.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Componente para renderizar las rutas
    const Route = () => (
        <div className="routes">
            {filteredRoutes.map(route => (
                <div className="route-card" key={route.name}>
                    <img src={route.image} alt={route.name} /> 
                    <h3>{route.name}</h3>
                    <p className="tipografia">⭐ 5.0</p>
                    <p className="tipografia">Dificultad: Media</p>
                    <p className="tipografia">Duración: 2 horas</p>
                    <p className="tipografia">$10 por persona</p>
                </div>
            ))}
            <div className="container-show-more">
                <button className="show-more">Mostrar más</button>
            </div>
        </div>
    );

    return (
        <div className="containerRutas">
            <HeaderMain onSearch={handleSearch} />
            {user ? (
                <>
                    <button className='btns' onClick={logout}>SignOut</button>
                </>
            ) : (
                <p className="tipografia"> Debe Iniciar Sesion para reservar!</p>
            )}
            <Route />
            <Footer className="footer-margin" />
        </div>
    );
}

export default Rutas;
