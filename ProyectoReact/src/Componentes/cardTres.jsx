import Image from './Imagen'
import Description from './Descripcion'
import Title from './titulo'
import Details from './Detalles'


function CardTres (props) {
    return (
        <div>
            <Title Title="MAELO RUIZ"  />

            <Image Image="Maelo Ruiz.webp" />
            <Details genre="Masculino" status="Vivo" />
            <Description Description="Ismael Ruiz Hernández (Nueva York, 22 de octubre de 1966) conocido como Maelo Ruiz, 
            es un cantante de salsa estadounidense de ascendencia puertorriqueña." />

            <p className='pd'>"Texto copiado de Wikipedia"</p>
        </div>
    )
}

export default CardTres