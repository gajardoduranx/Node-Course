import http from 'node:http'

const processRequest = (req, res) => {
  const { url, method } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify({ name: 'ditto' }))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain ; charset=utf-8')
          return res.end('Página no encontrada')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
          // escuchar evento data
          req.on('data', (chunk) => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
        }
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain ; charset=utf-8')
          return res.end('Página no encontrada')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server listenig on port 3000')
})
