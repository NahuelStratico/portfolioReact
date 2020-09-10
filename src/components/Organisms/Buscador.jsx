import React from 'react'
import '../styles/home.css'

const Buscador = () => {

    return(
            <div className="github_container">
                    <input 
                    type="text"
                    placeholder="Buscar proyectos en github"
                    className="input_github"/>

                    <div className="github_title">
                        <span className="github_title-item">Todos</span>
                        <span className="github_title-item">javascript</span>
                        <span className="github_title-item">React</span>
                        <span className="github_title-item">NodeJS</span>
                    </div>
            </div>
        )
}



export default Buscador