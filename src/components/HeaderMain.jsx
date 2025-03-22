import React, { useState } from 'react';
import "/src/HeaderMain.css";
import logo from '../assets/metrovilalogo.jpg';
import { Link } from 'react-router-dom';

const HeaderMain = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term); // Llama a la función de búsqueda pasada como prop
    };

    return (
        <header className="mainHeader">
            <div className="logo">
                <img id="logo" src={logo} alt="Logo" />
            </div>
            <div className="navContainer">
                <nav className="nav">
                    <Link to="/">
                        <button className="navButton">Inicio</button>
                    </Link>
                    <button className="navButton">Rutas visitadas</button>
                    <Link to={"/rutas"} id="rutaid">
                        <button className="navButton">Rutas</button>
                    </Link>
                    <input 
                        className="searchInput" 
                        type="text" 
                        placeholder="Busca una ruta" 
                        value={searchTerm}
                        onChange={handleSearch} // Maneja el cambio en el input
                    />
                    <button className="searchButton">Buscar</button>
                </nav>
            </div>
        </header>
    );
}

export default HeaderMain;
