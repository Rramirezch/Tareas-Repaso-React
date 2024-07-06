import React from 'react'

const DetailsE = (props) => {
  return (
    <div>
        <p>
            <div className='codigo'>{props.gender}</div><br></br>
            <b className='estado'><span className='span'>{props.status}</span></b>
        </p> 
    </div>
      )
}

export default DetailsE