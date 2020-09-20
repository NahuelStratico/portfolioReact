import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import Cards from '../Organisms/Cards'
import nahuel from '../../assets/Nahuel.jpg'


const Home = () => {

    return(
        <div className="container">
            <div className="home_title-content">
                <h1 className="home_title">Hola! Soy Nahuel Strático</h1>
                <span className="home_dev">Desarrollador Full Stack</span>
                <p className="home_p">Si estas en esta web app es por que sos Select@r IT ó simplemente queres ver mis trabajos.</p>
            </div>

            <div className="row img_row">
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <div className="img_container">
                        <img src={nahuel} alt="Mi foto" className="img-fluid img_nahuel"/>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start margen-top">
                    <h5 className="title_me">Sobre mi</h5>
                    <p className="text_me">
                        Mi experiencia principal es el Frontend, pero no dejo de hacer backend. <br/>
                        Disfruto de aprender, enseñar y compartir experiencias. <br/><br/>
                        Tengo como objetivo que las empresas con las cuales trabajo alcancen el exito y se sientan comodas con el trabajo que realizado. <br/> 
                        Ademas de ser freelancer colaboro en voluntariados haciendo desarrollo web. 
                    
                    </p>
                </div>
            </div>

            <div className="icon_container d-none">
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


