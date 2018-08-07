const fs = require('fs')

let crearArchivo = (base, limite=10) => {
  return new Promise((resolve, reject) => {
    let content = ""

    if( !Number(base) ){
      reject('No es un numero');
      return;
    }

    for (let index = 1; index <= limite; index++) {
      content += `${ base } * ${ index } = ${ base * index }\n`
    }
    
    fs.writeFile(`tablas/tabla-${ base }.txt`, content, (err) => {
      if(err)
        reject('Hay un error por el momento')
      else
        resolve(`tabla-${ base }.txt`)
    })
  })
}

let listarTabla = (base, limite) => {
  for (let index = 1; index <= limite; index++) {
    console.log(`${ base } * ${ index } = ${ base * index }`)
  }
}

module.exports = {
  crearArchivo,
  listarTabla
}