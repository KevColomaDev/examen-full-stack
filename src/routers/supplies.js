import { Router } from 'express'
import { suppliesRegister } from '../controllers/supplies.js'
import { authLogin } from '../middlewares/authLogin.js'

export const routerSupplies = Router()

routerSupplies.get('/test', (req, res) => res.send('test'))
routerSupplies.post('/register-supplies', authLogin, suppliesRegister)
