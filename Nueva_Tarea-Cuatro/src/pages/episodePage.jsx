import { useEffect, useState } from 'react'
import EpisodeCard from '../componente/episodeCard';
import React from 'react'


function Episodes() {
  const [image, setImage] = useState("");
  
  const [charactersList, setCharactersList] = useState([]);
  const [paginacion, setPaginacion] = useState(1)
  


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${paginacion}`)
      .then((response) => response.json())
      .then((data)=> setCharactersList(data.results));
        
    }, [paginacion]);

    const incrementarPagina = () => {
      setPaginacion(paginacion + 1)
    }

    const decrementarPagina = () => {
      setPaginacion(paginacion - 1)
    }


  return (
    <>
    
      <h1>EPISODIOS DE RICK AND MORTY</h1>
      <div className='button'>
      <button className='up' disabled={paginacion === 3}onClick={incrementarPagina}>Siguiente Pagina</button>
      Pagina Nro:{paginacion}
      <button className='down' disabled={paginacion === 1} onClick={decrementarPagina}>Anterior Pagina</button>
      </div>
      <div className='containerUno'>
        {charactersList.length !== 0  && charactersList.map((character) => (
          <EpisodeCard key={charactersList.id}
          name={character.name} gender={character.episode} status={character.air_date} />
        ))}
       </div>
    </>  
    )
  }
export default Episodes