const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de multiplicar', opts)
    .command('crear', 'Crean un nuevo archivo de multiplicar tomando en cuenta los datos del usuario', opts)
  .argv

module.exports = {
  argv
}