const axios = require('axios');

const findPokeApi = async (name) => {
    const doesThisNameExist = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        .then(result => result.data)
        .catch(error => null);
    return doesThisNameExist;
}

const findIdApi = async (idApi) => {

    try {
        const pokeIdApi = await findPokeApi(idApi)
        return { 
            name: pokeIdApi.name,
            id: pokeIdApi.id,
            image: pokeIdApi.sprites.other['official-artwork'].front_default,
            hp: pokeIdApi.stats[0].base_stat,
            attack: pokeIdApi.stats[1].base_stat,
            defense: pokeIdApi.stats[2].base_stat,
            speed: pokeIdApi.stats[5].base_stat,
            height: pokeIdApi.height,
            weight: pokeIdApi.weight,
            Types: pokeIdApi.types.map((result) => {
                return {
                    name: result.type.name,
                }
            })
        }
    } catch (error) {
        return null
    }

}

module.exports = {
    findPokeApi,
    findIdApi,
}