const net = require('node:net')

function findAvailablePort (desiredPort) {
  // Retorna un Promise que crea un server y resuelve con el puerto del server
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', err => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}
module.exports = { findAvailablePort }
