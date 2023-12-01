const http = require('node:http')
const { findAvailablePort } = require('./12-free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})
findAvailablePort(3000).then(port => {
  server.listen((port) => {
    console.log(`server listenig on port https://localhost:${port}`)
  })
})
