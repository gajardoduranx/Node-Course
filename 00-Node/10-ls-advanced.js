// SISTEMA PARA LISTAR INFORMACIÓN DE LOS DIRECTORIOS

const fs = require('node:fs/promises')
const path = require('path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files
  try {
    files = await fs.readdir(directory)
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${directory}`))
    process.exit(1)
  }
  // Promesas con los archivos
  const filePromises = files.map(async (file) => {
    // Recuperacion del path
    const filePath = path.join(directory, file)
    let stats
    try {
      stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.log(`No se pudo leer el archivo ${filePath}`) // Caso de Error
      process.exit(1)
    }
    // Información
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} | ${pc.blue(file.padEnd(24))} ${pc.green(
      fileSize.padStart(12)
    )} ${fileModified}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
