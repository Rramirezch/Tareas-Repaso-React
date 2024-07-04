import React from 'react'

const Details = (props) => {
  return (
    <div>
        <p>
            <b className='genero'>Genero: <span className='span'>{props.gender}</span></b>
            <b className='estado'>Estado: <span className='span'>{props.status}</span></b>
        </p> 
    </div>
      )
}

export default Details