import { useEffect, useState } from 'react'
//import Reloj from './componente/reloj'
import CharacterCard from './componente/characterCard'
//import RickAndMortyCharacterCard from './componente/RickAndMortyCharacterCard'
import './App.css'
import React from 'react'


function App() {
  const [image, setImage] = useState("");
  
  const [charactersList, setCharactersList] = useState([]);
  const [paginacion, setPaginacion] = useState(1)
  


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
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
    
      <h1>PERSONAJES DE RICK AND MORTY</h1>
      <div className='button'>
      <button className='up' onClick={incrementarPagina}>Siguiente Pagina</button>
      Pagina Nro:{paginacion}
      <button className='down' disabled={paginacion === 1} onClick={decrementarPagina}>Anterior Pagina</button>
      </div>
      <div className='containerUno'>
        {charactersList.length !== 0  && charactersList.map((character) => (
          <CharacterCard key={charactersList.id} image={character.image}
          name={character.name} gender={character.gender} status={character.status} />
        ))}
       </div>
    </>  
    )
  }
export default App