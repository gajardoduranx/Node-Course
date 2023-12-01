// ASINCRONO SECUACIAL

import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./arc.txt', 'utf-8')
console.log('primer text', text)

console.log('Haciendo cosas mientras')

console.log('Leyendo el segundo archivo...')
const secondText = readFile('./arc2.txt', 'utf-8')
console.log('primer text', secondText)
