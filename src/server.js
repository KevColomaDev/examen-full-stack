import e from 'express'
import { router } from './routers/administrators.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = e()

// Middlewares
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE'] }))
app.use(e.json())

// Routes
app.use('/administrators', router)
