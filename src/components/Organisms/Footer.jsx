import React from 'react'
import '../styles/footer.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Footer = () => {

    return(
        <footer className="footer_container">
            <div className="footer_logo">
                <h5>StráticoDev</h5>
                <p>Desarrollador Full Stack</p>
            </div>
            <div className="footer_icon-container">
                <a href="https://github.com/NahuelStratico" target="blank" className="footer_icon-content">
                    <AiIcons.AiFillGithub className="footer_icon"/>
                </a>
                <a href="https://www.linkedin.com/in/nahuelstratico/" target="blank" className="footer_icon-content">
                    <FaIcons.FaLinkedin className="footer_icon"/>
                </a>
            </div>
            <div className="footer_data">
                <p>straticonahuel@gmail.com</p>
                <p>+54 9 116879 1292</p>
                <p>Argentina</p>
            </div>
        </footer>
    )
}

export default Footer