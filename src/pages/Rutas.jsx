import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../app'
import { signOut } from 'firebase/auth'
import { auth } from '../pages/Firebase.js'; 
function Rutas() {

  const {user,setUser} = useContext(UserContext)

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    scroll(0, 0);
  }
  return (
    <> estas en rutas loco
      <a href="/">
        <button>home</button>
      </a></>
     
    
  )
}

export default Rutas
