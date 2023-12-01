// El entorno global no es Window es Global
// console.log(globalThis)

// CommonJS Importar o requerir Module
const { sum } = require('./sum')

console.log(sum(2,3))