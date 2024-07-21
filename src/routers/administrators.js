import { Router } from 'express'
import { login } from '../controllers/administrators.js'
import { authLogin } from '../middlewares/authLogin.js'

export const router = Router()

router.post('/login', login)
router.get('/test', authLogin, (req, res) => res.send('test'))
