import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
    return(
        <>
            <h1>Bienvenido a la Pagina de rick and Morty</h1>
            <div className="rickyHome">
                <h3>Enlaces Rapidos:</h3>

                <span className="span">
                    <Link to="/Personaje" >Ver un Personaje</Link>
                </span>
                <span className="span">
                    <Link to="/RickyCharacter" >Ir a Personajes</Link>
                </span>
                <span className="span">
                    <Link to="/Episodes" >Ir a Episodios</Link>
                </span>
            </div>
            <img className='imgHome' src="Ricky.webp" alt="Foto Rickandmorty" />
        </>    
        
    );
}


export default HomePage;