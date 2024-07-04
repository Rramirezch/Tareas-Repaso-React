import React from 'react'
import Title from './titulo'
import Image from './imagen'
import Details from './detalles'


function CharacterCard (props)  {
  return (
    <div className='container'>
        
        <Image url={props.image} />
        <Title Title={props.name} />
        <Details
            gender={props.gender}
            status={props.status}
        />
    </div>
  );
}

export default CharacterCard