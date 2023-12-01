import express from 'express'

const PORT = process.env.PORT ?? 3003

const app = express()
app.disable('x-powered-by')
// MIDDLEWARES
app.use((req, res, next) => {
  console.log('mi primer middlewares')
  // trackear la request a la base de datos
  // revisar si el usuario esta autenticado o tiene cookies
  next()
})
// Parsea el request y lo guarda en req.body
// - FORMA LARGA
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   //  solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''
//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })
// - FORMA CORTA
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})
app.get('/pokemon/ditto', (req, res) => {
  res.json({ message: 'Ditto' })
})
app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en bbdd
  res.status(201).json(req.body)
})
// la ultima a la que va a llegar
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' })
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
