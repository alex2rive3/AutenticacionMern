import pkg from 'mongoose'
const { connect, set } = pkg
import dotenv from 'dotenv'
dotenv.config()
async function conectDB() {
  try {
    await connect(`${process.env.MONGODB_URI}/login`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Base de datos conectada')
  } catch (err) {
    console.error(err)
  }
}
set('strictQuery', false)

conectDB()
