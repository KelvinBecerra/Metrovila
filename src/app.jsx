import React, { createContext, useState } from 'react';

export const UserContext = createContext();
//este es el contexto de usuario
//de esta manera
// Crear el contexto: export const UserContext = createContext();
// Proveer el contexto: Usar UserContext.Provider para envolver los componentes que necesitan acceso al contexto.
// Manejar el estado del usuario: Usar useState para manejar el estado del usuario.
// Acceder al contexto: Usar useContext en los componentes que necesitan acceder al contexto.
// Este patrón es muy útil para 
//explicacion de copilot, me dio lala hacerlo todo

const App = ({ children }) => {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default App;
