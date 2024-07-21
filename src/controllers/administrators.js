import { administrators } from '../models/administrators.js'
import { validateLogin } from '../schemas/login.js'
import { validateRegisterPatient } from '../schemas/registerPatient.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const administrator = validateLogin(req.body)
    if (!administrator.email || !administrator.password) {
      return res.status(401).json({ msg: 'Neccesary email and password' })
    }
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

export const registerPatient = async (req, res) => {
  const validateDate = (date) => {
    let regex = /^\d{2}\/\d{1}\/\d{4}$/
    if (regex.test(date)) {
      return date
    } else {
      regex = /^\d{2}\/\d{2}\/\d{4}$/
      if (regex.test(date)) {
        return date
      }
    }
  }

  try {
    const patient = validateRegisterPatient(req.body)
    console.log(patient)
    if (!patient.name || !patient.habitation) {
      return res.status(401).json({ msg: 'Neccesary name and habitation' })
    }
    const validAdmissionDate = validateDate(patient.admissionDate)
    const validDepartureDate = validateDate(patient.departureDate)

    if (!validAdmissionDate || !validDepartureDate) {
      return res.status(401).json({ msg: 'Invalid admission date or departure date' })
    }

    await administrators.registerPatient(patient)
    return res.status(200).json({ msg: 'Patient registered' })
  } catch (error) {
    console.log(error)
  }
}
