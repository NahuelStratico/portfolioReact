import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import Cards from '../Organisms/Cards'


const Home = () => {

    return(
        <div className="container">
            <div className="home_title-content">
                <h1 className="home_title">Hola! Soy Nahuel Strático</h1>
                <span className="home_dev">Desarrollador Full Stack</span>
                <p className="home_p">Si estas en esta web app es por que sos Select@r IT ó simplemente queres ver mis trabajos.</p>
            </div>

            <div className="icon_container">
                <div className="icon">
                    
                </div>
                <div className="ellipse-container">
                    <div className="ellipse thin"></div>
                    <div className="ellipse thick"></div>
                    <div className="ellipse yellow"></div>
                </div>
            </div>

            <Cards/>

            <div className="more_info">
                <h3 className="title_more-info">Más acerca de mi</h3>

                <div className="button_container">
                    <div className="button_content-download">
                        <p>Descarga mi CV</p>
                        <a href="https://drive.google.com/file/d/12YxK3yZgtOYnihLv807ikDJxi15F142L/view?usp=sharing" target="blank">
                            <button>Descargar</button>
                        </a>
                    </div>
                    <div className="button_content-more">
                        <p>Mirá algunos trabajos freelance</p>
                        <Link to="/works">
                            <button>ver más</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default Home


