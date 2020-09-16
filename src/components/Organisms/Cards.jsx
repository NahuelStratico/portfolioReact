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
                        src='./img/plataforma.jpg'
                        text='Plataforma educativa con React'
                        label='React'
                        href='https://github.com/NahuelStratico/react'
                        />
                        <CardItem
                        src='./img/blue-app.jpg'
                        text='Single Page Application con el objetivo de tener una base de datos con clientes y sus respectivos movimientos.'
                        label='Javascript - Node Js - MySQL'
                        href='https://blueapp2020.herokuapp.com/'
                        />
                        <CardItem
                        src='./img/cvHtml.png'
                        text='Mi CV en HTML5 y CSS3. Maquetación completa de mi hoja de vida.'
                        label='HTML - CSS'
                        href='https://github.com/NahuelStratico/MiCVenHTML'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
