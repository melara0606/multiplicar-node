const { 
  crearArchivo, 
  listarTabla 
} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
  
let commando = argv._[0]
switch (commando) {
  case 'crear':
    crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(error => console.log(error))
    break;
  case 'listar': 
    listarTabla(argv.base, argv.limite)
    break
  default:
    console.log('Comando no reconocido')
}