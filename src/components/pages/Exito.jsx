import React from 'react'
import {Link} from 'react-router-dom'
import exito from '../../svg/success.svg'
import '../styles/exito.css'


const Exito = () => (

    <div className="container exito_container">
        <div>
            <img src={exito} alt=""/>   
        </div>
        <h4 className="exito_title">
            Mensaje Recibido. <br/>¡Gracias!
        </h4>
        <p className="exito_p">Me pondré en contacto.</p>
        <Link to="/inicio" className="btn btn-outline-success exito_btn">
            Volver a inicio
        </Link>
    </div>

)

export default Exito