import { useEffect, useState } from 'react';
import CharacterCard from '../componente/characterCard';


function Personaje() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
    const [rickAndMortyCharacterId, setRickAndMortyCharacterId] = useState(1)
    

    useEffect( () => {
        fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          setName(result.name);
          setImage(result.image);
          setGenre(result.gender);
          setStatus(result.status);
          
        });
      }, [rickAndMortyCharacterId]);
      const incrementarPagina = () => {
        setRickAndMortyCharacterId(rickAndMortyCharacterId + 1)
      }
  
      const decrementarPagina = () => {
        setRickAndMortyCharacterId(rickAndMortyCharacterId - 1)
      }
  
  
    return (
      <>
        <div className='principal-container'>
        
            <h1 className='title1'>Personaje Seleccionado</h1>
            <button className='up' id='personajeB' onClick={incrementarPagina}>Siguiente Personaje</button>
            Personaje ID Nro:{rickAndMortyCharacterId}
            <button className='down' disabled={rickAndMortyCharacterId === 1} onClick={decrementarPagina}>Anterior Personaje</button>

            </div>    
            <div className='personaje'>
        
            <CharacterCard
              name={name}
              image={image}
              gender={genre}
              status={status}
            />
        </div>
      </>
    
    );
}

export default Personaje