// ASINCRONO CON CALLBACK

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./arc.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('Haciendo cosas mientras')

console.log('Leyendo el segundo archivo...')
fs.readFile('./arc2.txt', 'utf-8', (err, text) => {
  console.log(text)
})
