import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
  const navigate = useNavigate()
  const { user, isAutenticated, setIsAutenticated } = useContext(UserContext)
  const handleClick = () => {
    setIsAutenticated(false)
    navigate('/')
  }
  useEffect(() => {
    if (!isAutenticated) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <header>
        <ul>
          <li>Bienvenido {user?.username || 'Admin'}</li>
          <li>Ultimo Inicio de session {user?.lastLogin}</li>
          <li>
            <button
              className='logout'
              onClick={handleClick}
            >
              Logout
            </button>
          </li>
        </ul>
      </header>
      <main>
        <h1>HOLA MUNDO</h1>
      </main>
    </>
  )
}

export default Welcome
