import React from 'react';
import DatosInput from '../components/DatosInput';

function Formulario() {
  return (
    <div className="formulario-container">
      <DatosInput />
      <div className="botones-container">
        <button className='botoncitosini'>Ingresar</button>
        <a href="/">
          <button className='botoncitosini'>home</button>
        </a>
      </div>
    </div>
  );
}

export default Formulario;
