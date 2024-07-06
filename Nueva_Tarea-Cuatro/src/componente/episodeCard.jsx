import React from 'react'
import Title from './titulo'
import DetailsE from './detallesEpisode'


function EpisodeCard (props)  {
  return (
    <div className='container'>
        
    
        <Title Title={props.name} />
        <DetailsE
            gender={props.gender}
            status={props.status}
        />
    </div>
  );
}

export default EpisodeCard