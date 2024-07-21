import { administrators } from '../models/administrators.js'
import { validateLogin } from '../schemas/login.js'

export const login = async (req, res) => {
  try {
    const administrator = validateLogin(req.body)
    const administratorLogin = await administrators.login(administrator.email, administrator.password)
    if (!administratorLogin) {
      return res.status(401).json({ msg: 'Wrong email or password' })
    }
    return res.status(200).json(administratorLogin)
  } catch (error) {
    console.log(error)
  }
}
