import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'



export const NavBar = () => {
  return (
    <> 
        
        <nav>
            <Link to="/Inicio">Inicio</Link>
            <Link to="/Productos">Productos</Link>
            <Link to="/Contacto">Contacto</Link>
        </nav>
        
        
        
    </>
  )
}
