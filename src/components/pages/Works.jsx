import React from 'react'
import '../styles/works.css'
import avatar_smile from '../../svg/avatar_smile.svg'
import avatar_tongue from '../../svg/avatar_tongue.svg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from '../Organisms/CardsWorks';


const Works = () => {

    return (
        <div className="container">
            <h1 className="title_work">Freelanceando</h1>
    
            <div>
                <img src={avatar_smile} alt="Avatar"
                onMouseOver={e => (e.currentTarget.src = avatar_tongue)}
                onMouseOut={e => (e.currentTarget.src = avatar_smile)}
                className="img_avatar"
                />
            </div>

            <div className="cards_container-works">
                <Cards/>
            </div>
        </div>
    )
}



export default Works
