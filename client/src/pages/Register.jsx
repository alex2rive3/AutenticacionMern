import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const port = import.meta.env.PORT

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

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    axios
      .post('http://localhost:8000/api/register', formData, {
        withCredentials: true,
      })
      .then((result) => result.data)
      .then((response) => {
        if (response.creado === 'ok') {
          setFormErrors({})
          navigate('/')
        }
      })
      .catch((errors) => {
        console.log(errors)
        console.log(errors.response.data.errors)
        if (errors.response.data.code) {
          setFormErrors({ username: { message: 'email already taken' } })
        } else {
          setFormErrors(errors.response.data.errors)
        }
      })
  }

  return (
    <>
      <h1>Create User</h1>
      <form onSubmit={handleRegisterSubmit}>
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
            Register
          </Button>
          <Button
            variant='contained'
            color='primary'
          >
            <Link to={'..'}>Cancel</Link>
          </Button>
        </div>
      </form>
    </>
  )
}

export default Register
