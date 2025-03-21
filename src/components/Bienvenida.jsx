import React from 'react'

//componente de bienvenida
//donde hay un titulo y un parrafo
//ese componente donde se llame aparecera ese titulo y ese parrafo
function Bienvenida() {
  return (
    <>
    <div className="bienvenida">
        <h1>Bienvenidos a Metrovila</h1>
    </div>
    <div className="bienvenida p ">
        <p>La Universidad Metropolitana,a través de su Decanato Estudiantil y el Proyecto Ávila, se compromete a promover un estilo de vida activo y saludable entre sus estudiantes, con el objetivo de fomentar la participación en actividades recreativas y de esparcimiento que contribuyan al bienestar físico y emocional de la comunidad universitaria.
        </p>
    </div>
    </>
    
  )
}

export default Bienvenida
