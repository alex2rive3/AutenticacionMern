import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/LoginContext'

const Login = () => {
  const { setUser, setIsAutenticated } = useContext(UserContext)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const [formErrors, setFormErrors] = useState({})

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(`Email: ${formData.username}`)
    console.log(`Password: ${formData.password}`)
    axios
      .post('http://localhost:8000/api/login', formData, {
        withCredentials: true,
      })
      .then((result) => result.data)
      .then((response) => {
        setFormErrors({})
        console.log(response)
        if (response.estado === 'ok') {
          setUser(response.user)
          setIsAutenticated(true)
          navigate('/welcome')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleLoginSubmit}>
        {['username', 'password'].map((field) => (
          <TextField
            key={field}
            label={capitalize(field)}
            variant='outlined'
            value={formData[field] || ''}
            onChange={handleChange}
            name={field}
            margin='normal'
            fullWidth
            type={field === 'password' ? field : 'text'}
            required={true}
            error={formErrors[field] != null}
            helperText={formErrors[field]?.message}
          />
        ))}
        <div className='botonera'>
          <Button
            variant='contained'
            type='submit'
            color='primary'
          >
            Login
          </Button>
          <Button
            variant='contained'
            color='primary'
          >
            <Link to={'register'}>Create User</Link>
          </Button>
        </div>
      </form>
    </>
  )
}

export default Login
