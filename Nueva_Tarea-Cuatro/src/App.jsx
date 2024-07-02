import { useEffect, useState } from 'react'
import Reloj from './componente/reloj'
import CharacterCard from './componente/characterCard'
import RickAndMortyCharacterCard from './componente/RickAndMortyCharacterCard'
import './App.css'
import React from 'react'


function App() {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const rickAndMortyCharacterId = 1;


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
      .then((response) => response.json())
      .then((results)=> {
        console.log(results);
        setName(results.name);
        setImage(results.image);
        setGender(results.gender);
        setStatus(results.status);
      }); 
    }, []);


  return (
    <>
      <Reloj />
    
      <h1>PERSONAJE DE RICK AND MORTY</h1>
      <div className='containerUno'>
      <CharacterCard
        
        image={image}
        name={name}
        gender={gender}
        status={status}
      />
      <RickAndMortyCharacterCard id={2} />
      <RickAndMortyCharacterCard id={3} />
      <RickAndMortyCharacterCard id={5} />
      <RickAndMortyCharacterCard id={6} />
      <RickAndMortyCharacterCard id={10} />
      </div>
    </>  
    )
  }
export default App