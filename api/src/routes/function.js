const axios = require('axios');

const findPokeApi = async (name) => {
    const doesThisNameExist = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then(result => result.data)
        .catch(error => null);
    return doesThisNameExist;
}

module.exports = {
    findPokeApi
}