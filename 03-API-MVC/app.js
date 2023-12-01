import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import router from './routes/movies.js'

const app = express()

app.use(corsMiddleware())

app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express
app.use(json())

app.use('/movies', router)

const PORT = process.env.PORT || 1234

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})