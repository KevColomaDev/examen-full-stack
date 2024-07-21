import e from 'express'
import { router } from './routers/administrators.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = e()

// Middlewares
app.use(cors())
app.use(e.json())
app.use(cookieParser())

// Routes
app.use('/administrators', router)
