import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'



const Header = () => (
    <header className="header">
       <div className="header_content">
           <div className="header_logo">
               <NavLink className="logo" to="/">
                    StraticoDev
               </NavLink>
           </div>
           <div className="nav_content">
               <nav className="navbar">
                   <ul className="navbar_content">
                       <li className="navbar_item"><NavLink className="navbar_link" to="/">Inicio</NavLink></li>
                       <li className="navbar_item"><NavLink className="navbar_link" to="/works">Trabajos</NavLink></li>
                       <li className="navbar_item item_contact"><NavLink className="navbar_link button_contact" to="/contact">Contacto</NavLink></li>
                   </ul>
               </nav>
           </div>
       </div>
    </header>
)


export default Header
