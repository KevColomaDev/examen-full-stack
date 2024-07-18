import e from 'express'

export const app = e()

// Middlewares
app.use(e.json())

// Routes
app.get('/', (req, res) => {
  res.send('Final exam')
})
