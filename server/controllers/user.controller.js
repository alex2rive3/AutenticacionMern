import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'

export const login = async (req, res) => {
  const { password, username } = req.body
  try {
    const user = await userModel.findOne({ username: username })

    if (user === null) {
      res.json({ message: 'El usuario es incorrecto.' })
    } else {
      const passwordValid = await bcrypt.compare(password, user.password)

      if (passwordValid) {
        // Guardar la hora actual en el campo lastLogin
        user.lastLogin = new Date()
        await user.save()

        res.status(200).json({ estado: 'ok', user })
      } else {
        res.json({ message: 'La contraseña es incorrecta.' })
      }
    }
  } catch (err) {
    res.json({ error: true, message: 'Inicio de sesión inválido.' })
  }
}

export const register = async (req, res) => {
  try {
    const { username, password } = req.body
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await userModel.findOne({ username })
    if (existingUser) {
      return res.status(409).json({ error: 'El usuario ya existe' })
    }
    // Encriptar el password
    const saltRounds = 10 // Cuantas veces realizar el hashing (más vueltas, más seguro pero más lento)
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Crear el nuevo usuario con el password encriptado
    const newUser = new userModel({
      username,
      password: hashedPassword,
    })

    // Guardar el usuario en la base de datos
    await newUser.save()
    res.status(200).json({ creado: 'ok' })
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}
