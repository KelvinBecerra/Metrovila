import React from 'react';
import "/src/HeaderMain.css";
import logo from '../assets/metrovilalogo.jpg'
import { Link } from 'react-router-dom'

const HeaderMain = () => {
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
        <input className="searchInput" type="text" placeholder="Busca una ruta" />
        <button className="searchButton">Buscar</button>
    </nav>
</div>
        </header>
    );
}

export default HeaderMain;