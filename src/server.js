import e from 'express'
import { router } from './routers/administrators.js'

export const app = e()

// Middlewares
app.use(e.json())

// Routes
app.use('/administrators', router)
