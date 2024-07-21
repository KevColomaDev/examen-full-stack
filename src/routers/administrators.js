import { Router } from 'express'
import { login, registerPatient } from '../controllers/administrators.js'
import { authLogin } from '../middlewares/authLogin.js'

export const router = Router()

router.post('/login', login)
router.get('/test', authLogin, (req, res) => res.send('test'))
router.post('/register-patient', authLogin, registerPatient)
