const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((result) => {
                console.log(`${result} creada correctemente!`);
            }).catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log('comando no reconocido');
        break;
}

// console.log(comando);


// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);