// ASINCRONO PARALELO MAS RAPIDO
import { readFile } from 'fs/promises'

Promise.all([
  readFile('./arc.txt', 'utf-8'),
  readFile('./arc.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('primer texto', text)
  console.log('segundo texto', secondText)
})
