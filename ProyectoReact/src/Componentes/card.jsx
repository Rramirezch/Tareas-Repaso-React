import React from "react"




function Card (props) {

    return (
        <>
        <div className="container">

            <h1>{props.Title}</h1>

            <img src={props.Image} alt={props.alt} />
            <p>
                <b>Genero: </b> {props.genre}

                <b className="estado">Estado: </b> {props.status}
            </p>
            <p className="informacion">{props.Descripciones}</p>
            <p className="PD">"{props.PD}"</p>
        </div>
        </>
    
    )
}

export default Card