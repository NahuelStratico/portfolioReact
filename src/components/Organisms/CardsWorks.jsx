import React from 'react';
import Card from './CardUI';
import giargia from '../../assets/giargiaWeb.jpg';
import lascano from '../../assets/lascanoweb.jpg';
import rottoli from '../../assets/rottoli.jpg';

const Cards = () => {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
                        <Card 
                        imgsrc={giargia}
                        title="Giargia Construcciones"
                        description="Actualización de sitio web. 
                        Nuevo diseño y funcionalidades. Tecnologías: HTML | CSS | Javascript | PHP "
                        href="http://giargiaconstrucciones.com.ar"
                        />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
                        <Card 
                        imgsrc={lascano}
                        title="Lascano Estudio"
                        description="Desarrollo a medida.
                        Diseño web y de logotipo.
                        Tecnologías:
                        HTML | CSS | BOOTSTRAP | JAVASCRIPT | Google"
                        href="http://www.lascanoestudio.com/"
                        />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
                        <Card 
                        imgsrc={rottoli}
                        title="Rottoli Estudio"
                        description="Desarrollo a medida.
                        Diseño web y de logotipo.
                        Tecnologías:
                        HTML | CSS | BOOTSTRAP | JAVASCRIPT
                        BackEnd: PHP"
                        href="https://www.estudiorottoli.com/"
                        />
                    </div>
                </div>
            </div>
        )
    
}

export default Cards;