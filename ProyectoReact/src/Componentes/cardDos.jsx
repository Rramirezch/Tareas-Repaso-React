import React from "react"
import Image from './Imagen'
import Description from './Descripcion'
import Title from './titulo'
import Details from './Detalles'


function CardDos (props) {
    return (
        <div>
            <Title Title="FRANKIE RUIZ"  />

            <Image Image="Frankie Ruiz.webp" />
            <Details genre="Masculino" status="Vivo" />

            <Description Description="Frankie Ruiz El artista que cambió el rumbo de la salsa

                Uno de los últimos grandes salseros, heredero de Hector Lavoe, cumple 65 años y sigue siendo un monolito
                " />
            <p className='pd'>"Texto copiado de Las Dos Orillas"</p>
        </div>
    )
}

export default CardDos