import React from 'react'
import '../styles/contact.css'

const Contact = () => (
    <div className="container">
        <h1 className="contact_title">Gracias por visitarme</h1>

        <h5 className="contact_description">¿Qué podemos hacer juntos?</h5>

        <form className="form_contact">
            <div className="row">
                <div className="col-12 col-lg-6 input_col">
                    <label>Email</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="col-12 col-lg-6 input_col">
                    <label>Nombre</label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 input_col">
                    <label className="mensaje_label">Mensaje</label>
                    <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <button type="submit" className="btn btn-outline-primary btn_contact">Enviar</button>
        </form>
    </div>
)


export default Contact
