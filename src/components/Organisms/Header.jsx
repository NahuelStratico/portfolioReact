import React, {useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/header.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Sidebar } from './Sidebar';





const Header = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


    return (
        <Fragment>
            <header className="header">
                <div className="container header_content">
                    <div className="header_logo">
                        <NavLink className="logo" to="/portfolioReact/">
                                StráticoDev
                        </NavLink>
                    </div>
                    <div className="nav_content">
                        <nav className="navbar">
                            <ul className="navbar_content">
                                <li className="navbar_item"><NavLink className="navbar_link link" to="/portfolioReact/">Inicio</NavLink></li>
                                <li className="navbar_item"><NavLink className="navbar_link link" to="/works">Trabajos</NavLink></li>
                                <li className="navbar_item item_contact"><NavLink className="navbar_link button_contact" to="/contact">Contacto</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="hamburger_nav">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                    </div>
                </div>
            </header>
            <div className={sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to='#' className="menu-bars close">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {Sidebar.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
                <li className="nav-text">
                    <a href="https://www.linkedin.com/in/nahuelstratico/" target="blank">
                        <FaIcons.FaLinkedinIn/> 
                    </a>
                </li>
            </ul>
            </div>
        </Fragment>   
    )


}




export default Header
