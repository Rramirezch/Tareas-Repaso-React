import React from 'react'

function Details (props) {
  return (
    <div>
        <p>
            <b>Genero: </b> {props.genre}
        
            <b className='estado'>Estado: </b> {props.status}
        </p>
    </div>
  )
}

export default Details