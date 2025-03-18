import React from "react";
import { useParams } from "react-router-dom";

const rutasInfo = {
  "sabas-nieves": {
    nombre: "Sabas Nieves",
    dificultad: "Media",
    duracion: "2 horas",
    precio: "$10",
  },
  "la-julia": {
    nombre: "La Julia",
    dificultad: "Fácil",
    duracion: "30 minutos",
    precio: "$5",
  },
  "pico-naiguata": {
    nombre: "Pico Naiguata",
    dificultad: "Alta",
    duracion: "6 horas",
    precio: "$25",
  },
};

function RutaDetalle() {
  const { rutaId } = useParams();
  const ruta = rutasInfo[rutaId];

  if (!ruta) {
    return (
      <div>
        <h2>Ruta no encontrada</h2>
        <p>Por favor, selecciona una ruta válida desde el listado.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{ruta.nombre}</h1>
      <p>Dificultad: {ruta.dificultad}</p>
      <p>Duración: {ruta.duracion}</p>
      <p>Precio: {ruta.precio}</p>
    </div>
  );
}

export default RutaDetalle;
