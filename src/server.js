import e from 'express'
import { router } from './routers/administrators.js'
import { routerSupplies } from './routers/supplies.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = e()

// Middlewares
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'https://examen-full-stack-frontend.onrender.com', methods: ['GET', 'POST', 'PUT', 'DELETE'] }))
app.use(e.json())

// Routes
app.use('/administrators', router)
app.use('/supplies', routerSupplies)
