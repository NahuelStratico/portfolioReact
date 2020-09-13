import React from 'react'
import CardItem from './CardItem'
import '../styles/cards.css'

function Cards() {
    return (
        <div className="cards">
            <h3 className="cards_title">Proyectos en Github</h3>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='./img/blue-app.jpg'
                        text='Plataforma educativa con React'
                        label='React'
                        href=''
                        />
                        <CardItem
                        src='./img/blue-app.jpg'
                        text='Single Page Application con el objetivo de tener una base de datos con clientes y sus respectivos movimientos.'
                        label='Javascript - Node Js - MySQL'
                        href=''
                        />
                        <CardItem
                        src='./img/blue-app.jpg'
                        text='Plataforma educativa con React'
                        label='React'
                        href='https://straticonahuel.000webhostapp.com/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
