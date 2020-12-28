const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');

const getInfo = async(direccion) => {

    try {
        const resLugar = await lugar.getLugarLatLng(direccion);
        const resClima = await clima.getClima(resLugar.latitud, resLugar.longitud);
        return `El clima de ${direccion} es de ${resClima}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}

module.exports = {
    getInfo
}