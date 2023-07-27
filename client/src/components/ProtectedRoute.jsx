import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { UserContext } from '../context/LoginContext'

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(UserContext)

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to='/login' />}
    />
  )
}

export default ProtectedRoute
