// Esto solo en los modulos nativos que no tienen promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// ASINCRONO SECUANCIAL

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./arc.txt', 'utf-8')
  .then(text => {
    console.log('primer text', text)
  })

console.log('Haciendo cosas mientras')

console.log('Leyendo el segundo archivo...')
fs.readFile('./arc2.txt', 'utf-8')
  .then(text => {
    console.log('primer text', text)
  })
