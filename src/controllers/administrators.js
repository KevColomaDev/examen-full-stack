import { administrators } from '../models/administrators.js'
import { validateLogin } from '../schemas/login.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const administrator = validateLogin(req.body)
    const administratorLogin = await administrators.login(administrator.email, administrator.password)
    if (!administratorLogin) {
      return res.status(401).json({ msg: 'Wrong email or password' })
    }

    const token = jwt.sign({ _id: administratorLogin._id }, process.env.JWT_SECRET)
    console.log(token)
    res.cookie('token', token, { httpOnly: true })
    const { _id, password, ...others } = administratorLogin
    return res.status(200).json({ administratorLogin: others })
  } catch (error) {
    console.log(error)
  }
}
