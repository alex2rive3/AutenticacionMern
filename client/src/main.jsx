import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/LoginContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>
)
