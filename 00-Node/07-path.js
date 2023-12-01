const path = require('node:path')

// barra separadora de carpetas segun window
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/react-node midu/password.txt')
console.log(base)

const filename = path.basename('/tmp/react-node midu/password.txt', 'txt')
console.log(filename)

const extension = path.extname('my.super.haf.jpg')
console.log(extension)
