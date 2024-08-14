import e from 'express'
import { router } from './routers/administrators.js'
import { routerSupplies } from './routers/supplies.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = e()

const allowedOrigins = [
  'http://localhost:3000', // Development
  'https://examen-full-stack-frontend.onrender.com' // Production
]

// Middlewares
app.use(cookieParser())
app.use(cors({
  origin: (origin, callback) => {
    // Verifica si el origen está en la lista de permitidos
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true) // Permitir el origen
    } else {
      callback(new Error('No permitido por CORS')) // Denegar el origen
    }
  },
  credentials: true, // Permite el uso de cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE'] // Métodos permitidos
}))
app.use(e.json())

// Routes
app.use('/administrators', router)
app.use('/supplies', routerSupplies)
