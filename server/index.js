import express from 'express'
import cors from 'cors'
import cookieParse from 'cookie-parser'
import './config/conectDB.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import userRoutes from './routes/user.routes.js'
app.use(
  cors({
    credentials: true,
    origin: process.env.LOCAL_HOST,
  })
)
app.use(express.json())
app.use(cookieParse())

app.use('/api', userRoutes)

const puerto = 8000
app.listen(puerto, () => {
  console.log(`Server corriendo en el puerto ${puerto}`)
})
