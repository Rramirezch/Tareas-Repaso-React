import React from 'react'

const Details = (props) => {
  return (
    <div>
        <p>
            <b>Genero: {props.gender}</b>
            <b className='estado'>Estado: {props.status}</b>
        </p> 
    </div>
      )
}

export default Details