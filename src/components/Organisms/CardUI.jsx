import React from 'react';
import '../styles/cardsWork.css'

const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="giargia" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className=".card-text text-secondary">
                    {props.description}
                </p>
                <a href={props.href} className="btn btn-outline-primary" target="blank">
                    Ver más
                </a>
            </div>
        </div> 
    );
}

export default Card;