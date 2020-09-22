import emailjs from 'emailjs-com';
import React from 'react'
import '../styles/contact.css'


const Form = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_zjztub8', 'template_iw1stl4', e.target, 'user_OCVz8t2zoSklmDsHgg1fX')
          .then((result) => {
              console.log(result.text);   
              document.location = "/success"   
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    
    }

   

    return(
        <form onSubmit={sendEmail} className="form_contact">
            <div className="row">
                <div className="col-12 col-lg-6 input_col">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="col-12 col-lg-6 input_col">
                    <label>Nombre</label>
                    <input type="text" className="form-control" name="name"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 input_col">
                    <label className="mensaje_label">Mensaje</label>
                    <textarea className="form-control" name="message" cols="30" rows="10"></textarea>
                </div>
            </div>
            <button type="submit" className="btn btn-outline-primary btn_contact">Enviar</button>
    </form>

    )

    

}

export default Form