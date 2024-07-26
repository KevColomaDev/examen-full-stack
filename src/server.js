import e from 'express'
import { router } from './routers/administrators.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = e()

// Middlewares
app.use(cookieParser())
app.use(cors())
app.use(e.json())

// Routes
app.use('/administrators', router)
