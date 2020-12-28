const temperatura = require('./temperatura/temperatura');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demandOption: true
    }
}).argv;


temperatura.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);