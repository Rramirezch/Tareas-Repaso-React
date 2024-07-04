import React, { useEffect, useState } from 'react'



function Reloj () {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [fecha, setFecha] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFecha(new Date().toLocaleDateString());
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);


    return <div className='reloj'>{fecha} {hora}</div>;
}


export default Reloj;