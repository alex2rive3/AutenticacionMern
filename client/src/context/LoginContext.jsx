import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Aquí puedes inicializar los datos del usuario según tus necesidades
  const [isAutenticated, setIsAutenticated] = useState(false)
  return (
    <UserContext.Provider
      value={{ user, setUser, isAutenticated, setIsAutenticated }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
