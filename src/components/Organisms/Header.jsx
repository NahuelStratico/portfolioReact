import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'



const Header = () => (
    <header className="header">
       <div>
           <div>
               <NavLink to="/">
                    StraticoDev
               </NavLink>
           </div>
           <div>
               <nav>
                   <ul>
                       <li><NavLink to="/">Home</NavLink></li>
                       <li><NavLink to="/about">Trabajos</NavLink></li>
                       <li><NavLink to="/contact">Contacto</NavLink></li>
                   </ul>
               </nav>
           </div>
       </div>
    </header>
)


export default Header
