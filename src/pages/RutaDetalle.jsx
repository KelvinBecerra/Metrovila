//ARCHIVO NUEVO PARA MOSTRAR LAS RUTAS DETALLADAS E INDIVIDUALES

// src/pages/RutaDetalle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const rutasInfo = {
  "sabas-nieves": { nombre: "Sabas Nieves", dificultad: "Media", duracion: "2 horas", precio: "$10", imagen: "src/assets/SabasNieves.jpg" },
  "la-julia": { nombre: "La Julia", dificultad: "Fácil", duracion: "30 minutos", precio: "$5", imagen: "src/assets/LaJulia.jpg" },
  "pico-naiguata": { nombre: "Pico Naiguata", dificultad: "Alta", duracion: "6 horas", precio: "$25", imagen: "src/assets/PicoNaiguata.jpg" },
  "humboldt": { nombre: "Humboldt", dificultad: "Alta", duracion: "3 horas", precio: "$15", imagen: "src/assets/Humboldt.jpg" },
  "el-eden": { nombre: "El Edén", dificultad: "Fácil", duracion: "15 minutos", precio: "$3", imagen: "src/assets/ElEden.jpg" },
  "piedra-del-indio": { nombre: "Piedra del Indio", dificultad: "Alta", duracion: "2 horas", precio: "$10", imagen: "src/assets/PiedraDelIndio.jpg" }
};

function RutaDetalle() {
  const { rutaId } = useParams();
  const ruta = rutasInfo[rutaId];

  if (!ruta) {
    return <h2>Ruta no encontrada</h2>;
  }

  return (
    <div>
      <h1>{ruta.nombre}</h1>
      <img src={ruta.imagen} alt={ruta.nombre} />
      <p>Dificultad: {ruta.dificultad}</p>
      <p>Duración: {ruta.duracion}</p>
      <p>Precio: {ruta.precio}</p>
    </div>
  );
}

export default RutaDetalle;

// src/router.jsx
import RutaDetalle from "./pages/RutaDetalle";

export const router = createBrowserRouter([
  {
    path: "/rutas/:rutaId",
    element: <RutaDetalle />,
  },
]);

// src/pages/Rutas.jsx (actualización para agregar los enlaces)
import { Link } from 'react-router-dom';

const rutas = [
  { id: "sabas-nieves", nombre: "Sabas Nieves", imagen: "src/assets/SabasNieves.jpg" },
  { id: "la-julia", nombre: "La Julia", imagen: "src/assets/LaJulia.jpg" },
  { id: "pico-naiguata", nombre: "Pico Naiguata", imagen: "src/assets/PicoNaiguata.jpg" },
  { id: "humboldt", nombre: "Humboldt", imagen: "src/assets/Humboldt.jpg" },
  { id: "el-eden", nombre: "El Edén", imagen: "src/assets/ElEden.jpg" },
  { id: "piedra-del-indio", nombre: "Piedra del Indio", imagen: "src/assets/PiedraDelIndio.jpg" }
];

function Rutas() {
  return (
    <div className="routes">
      {rutas.map((ruta) => (
        <div key={ruta.id} className="route-card">
          <Link to={`/rutas/${ruta.id}`}>
            <img src={ruta.imagen} alt={ruta.nombre} />
            <h3>{ruta.nombre}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

