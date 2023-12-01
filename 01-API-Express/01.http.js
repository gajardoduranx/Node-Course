import http from 'node:http' // Protocolo HTTP
import fs from 'node:fs' // FileSystem

const desiredPort = process.env.PORT ?? 1234

// Procesamiento del Servidor
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bievenido a mi página de inicio')
  } else if (req.url === '/imagen-super.png') {
    fs.readFile('./imagen-super.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Error al leer la imagen')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('Página no encontrada')
  }
}
// Servidor
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listenig on port http://localhost:${desiredPort}`)
})
