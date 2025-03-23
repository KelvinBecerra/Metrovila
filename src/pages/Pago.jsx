// MultipleFiles/pages/Pago.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pago() {
  const [nombre, setNombre] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pago procesado con éxito');
    navigate('/'); // Redirige a la página principal después del pago
  };

  return (
    <div className="pago-container">
      <h1>Detalles de Pago</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre en la Tarjeta</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        
        <label htmlFor="tarjeta">Número de Tarjeta</label>
        <input
          type="text"
          id="tarjeta"
          value={tarjeta}
          onChange={(e) => setTarjeta(e.target.value)}
          required
        />
        
        <label htmlFor="fechaExpiracion">Fecha de Expiración (MM/AA)</label>
        <input
          type="text"
          id="fechaExpiracion"
          value={fechaExpiracion}
          onChange={(e) => setFechaExpiracion(e.target.value)}
          required
        />
        
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}

export default Pago;