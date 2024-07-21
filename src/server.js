import e from 'express'
import { router } from './routers/administrators.js'
import cookieParser from 'cookie-parser'

export const app = e()

// Middlewares
app.use(e.json())
app.use(cookieParser())

// Routes
app.use('/administrators', router)
