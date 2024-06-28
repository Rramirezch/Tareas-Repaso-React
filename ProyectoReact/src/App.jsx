import React from 'react'
import Card from './Componentes/card'
import './App.css'
import Image from './Componentes/Imagen'
import Description from './Componentes/Descripcion'
import Title from './Componentes/titulo'
import Details from './Componentes/Detalles'
import descripcionesA from'./descripcionesA.json'




function App() {
  return (
    <>
      <div className='container-principal'>
          <Card Title="MARC ANTONY" Image="Marc2.webp" alt="MARC ANTONY"  genre="Masculino" 
            status="Vivo" Descripciones={descripcionesA.marc} PD={descripcionesA.W}/>
          <Card Title="FRANKIE RUIZ" Image="Frankie Ruiz.webp"  genre="Masculino" 
            status="Vivo" Descripciones={descripcionesA.frankie} PD={descripcionesA.D}/>
          <Card Title="MAELO RUIZ" Image="Maelo Ruiz.webp"  genre="Masculino" 
            status="Vivo" Descripciones={descripcionesA.maelo} PD={descripcionesA.W}/>

        <div className='container'>
          <Title Title="VICTOR MANUELLE"  />

          <Image Image="Victor Manuelle.webp" />
          <Details genre="Masculino" status="Vivo" />

          <Description Description="Víctor Manuel Ruiz Velázquez (Nueva York; 27 de septiembre de 1968), 
            más conocido como Víctor Manuelle, es un cantante estadounidense de origen puertorriqueño de salsa,
            así como también de boleros y baladas románticas." />

          <p className='PD'>"Texto copiado de Wikipedia"</p>
        </div>
        
        
      </div>
    </>
  )
}

export default App
