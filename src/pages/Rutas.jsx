import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/image.png";
import ImageCopy1 from "../assets/image copy.png";
import ImageCopy2 from "../assets/image copy 2.png";
import ImageCopy3 from "../assets/image copy 3.png";
import ImageCopy4 from "../assets/image copy 4.png";
import ImageCopy5 from "../assets/image copy 5.png";

const rutas = [
  { id: "sabas-nieves", nombre: "Sabas Nieves", imagen: ImageCopy1 },
  { id: "la-julia", nombre: "La Julia", imagen: Image1 },
  { id: "pico-naiguata", nombre: "Pico Naiguata", imagen: ImageCopy5 },
  { id: "humboldt", nombre: "Humboldt", imagen: ImageCopy4 },
  { id: "el-eden", nombre: "El Edén", imagen: ImageCopy2 },
  { id: "piedra-del-indio", nombre: "Piedra del Indio", imagen: ImageCopy3 },
];

const RutaCard = ({ id, nombre, imagen }) => (
  <div className="route-card">
    <Link to={`/rutas/${id}`}>
      <img src={imagen} alt={nombre} className="route-card-image" />
      <h3 className="route-card-title">{nombre}</h3>
    </Link>
  </div>
);

function Rutas() {
  return (
    <div className="routes">
      {rutas.map((ruta) => (
        <RutaCard key={ruta.id} id={ruta.id} nombre={ruta.nombre} imagen={ruta.imagen} />
      ))}
    </div>
  );
}

export default Rutas;
