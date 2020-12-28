const axios = require('axios');

const getClima = async(latitud, longitud) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=0aa6a903339dbe76c64a8260b21e5249`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}