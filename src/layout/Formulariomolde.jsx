import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderForm from '../components/HeaderForm'
function Formulariomolde() {
  return (
    <>

    <HeaderForm/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default Formulariomolde
