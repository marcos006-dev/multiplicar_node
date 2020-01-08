const fs = require('fs');


let listar = (base, limite) => {


    for (let i = 0; i <= limite; i++) {

        console.log(`${base} * ${i} = ${i * base}`);

    }



}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El dato ingresado no es un numero');
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`Tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla del: ${base}`)
            }
            // console.log(`El archivo de la tabla del: ${base} a sido creada`);
        });

    });
}

module.exports = {
    crearArchivo,
    listar
}