const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '6410382855mshf0f28f089cc75c3p136831jsnfdee76a2013d' }
    });

    const resp = await instance.get();

    if (resp.data.location.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.location;
    const dir = data.name;
    const latitud = data.lat;
    const longitud = data.lon;
    return {
        dir,
        latitud,
        longitud
    }
};

module.exports = {
    getLugarLatLng
}