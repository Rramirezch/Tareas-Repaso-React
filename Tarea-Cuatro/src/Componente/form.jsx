import React, { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setErrors('')
      setSuccess('')
      
    }, 5000)
  },[success, errors])


  const handleLogin = (e) => {
    e.preventDefault()
    if(!username || !password) return setErrors('El campo de Usuario/contraseña es Obligatorio')
      if(username.length < 9) return setErrors('Tu usuario debe ser mayor a 8 caracteres')
        if(password.length < 8) return setErrors('Tu Contraseña debe ser mayor a 8 caracteres')
        setErrors('')
        setSuccess('Tu formulario fue Enviado')
  }


  return (
    <div>
      <p>Inicio de Sesion</p>
      {errors && (
        <p style={{padding: '1rem', borderRadius: '1rem', color: 'red', backgroundColor: '#ccc',
        } }>{errors}</p>
      )}
      {success && (
        <p style={{padding: '1rem', borderRadius: '1rem', color: 'green', backgroundColor: '#ccc',
        } }>{success}</p>
      )}
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre Usuario</label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type='text'/>
        </div>
        <div>
          <label>Contraseña</label>
          <input 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password" />
        </div>
        <button type='submit'>Iniciar sesion</button>
      </form>
    </div>
  )
}

export default Form