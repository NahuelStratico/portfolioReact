import React, { Fragment } from 'react'
import '../styles/cards.css'

function CardItem(props) {
    return (
        <Fragment>
            <li className="cards__item">
                
                <a className="cards__item__link" href={props.href} target="blank">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Github proyect" 
                        className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                    </div>
                </a>
            </li>
        </Fragment>
    )
}

export default CardItem

