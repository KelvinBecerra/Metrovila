import React from 'react';

function DatosInput() {
  return (
    <>
      <form id='formReg' action="">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id='nombre' />
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id='apellido' />

        <label htmlFor="correo">Correo</label>
        <input type="text" id='correo' />
        <label htmlFor="contrasena">Contraseña</label>
        <input type="text" id='contrasena' />
        <label htmlFor="confirmar">Confirmacion</label>
        <input type="text" id='confirmar' />
      </form>
      <button className='botoncitosini'>Google</button>
      <button>Facebook</button>
      <button>Continuar</button>
      <button>Cambiar foto</button>
    </>
   
  );
}

export default DatosInput;
