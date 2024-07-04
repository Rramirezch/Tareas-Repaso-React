import React, { useState, useEffect } from "react";
import CharacterCard from "./characterCard";

function RickAndMortyCharacterCard(props) {
    const rickAndMortyCharacterId = props.id;
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    
    
    

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId)
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
            <div className='container'>
                <CharacterCard 
                    name={name}
                    image={image}
                    gender={gender}
                    status={status}
                />
            </div>
          );
}

export default RickAndMortyCharacterCard;