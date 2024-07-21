import { Router } from 'express'
import { login } from '../controllers/administrators.js'

export const router = Router()
router.post('/login', login)
