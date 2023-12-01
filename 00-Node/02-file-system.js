const fs = require('node:fs')

// Info del archivo
const stats = fs.statSync('./arc.txt')

console.log(
  stats.isFile(), // si es un fichero - true
  stats.isDirectory(), // si es un directorio - false
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)
