import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Welcome from '../pages/Welcome'
import NotFound from '../pages/NotFound'
import ProtectedRoute from '../components/ProtectedRoute'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
      errorElement={<NotFound />}
    >
      <Route
        index
        element={<Login />}
      />
      <Route
        path='register'
        element={<Register />}
      />
      <Route
        path='welcome'
        element={<Welcome />}
      />
    </Route>
  )
)
export default router
