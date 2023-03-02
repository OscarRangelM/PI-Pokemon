import axios from 'axios';


export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_API = 'GET_POKEMONS';
export const GET_POKEMONS_TYPE = 'GET_POKEMONS_TYPE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FIND_POKEMON = 'FIND_POKEMON';
export const FILTER_AZ = 'FILTER_AZ';
export const FILTER_ATTK = 'FILTER_ATTK';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';


export const getPokemons = () => {
    return async (disptach) => {
        try {
            const pokemons = await axios.get('http://localhost:3001/pokemons')
                .then(result => result.data)
                .catch(error => console.log(`Aqui hay un error, actions getPokemons pokemons , ${error}`));
            return disptach({
                type: GET_POKEMONS,
                payload: pokemons,
            });
        } catch (error) {
            console.log(`Aqui hay un error, actions getPokemons, ${error}`)
        };
    };

};

// console.log(getPokemons);

export const getPokemonsAPI = () => {
    return async (disptach) => {
        try {
            let allPokemonAPI = []
            for (let i = 1; i <= 40; i++) {

                const pokemonAPI = await axios.get(`http://localhost:3001/pokemons/${i}`)
                    .then(result => result.data)
                    .catch(error => error);
                allPokemonAPI.push(pokemonAPI)
            }
            return disptach({
                type: GET_POKEMONS_API,
                payload: allPokemonAPI,
            })
        } catch (error) {
            return error
        }
    }

}

export const getPokemonsType = () => {
    return {}
}

export const filterAZ = () => {
    return {}
}

export const filterATTK = () => {
    return {}
}

export const searchPokemon = (pokemonId) => {
    return async () => {
        try {
            const pokemon = await axios.get(`http://localhost:3001/pokemons?name=${pokemonId.toLowerCase()}`)
                .then(result => result.data)
                .catch(error => error);
            return {
                type: SEARCH_POKEMON,
                payload: pokemon,
            }
        } catch (error) {
            return error
        }
    }
}

export const addFavorite = (pokemon) => {
    return {
        type: ADD_FAVORITE,
        payload: pokemon,
    }
};

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
}

export const findPokemon = (id) => {
    return async (disptach) => {
        try {
            const pokemonDetails = await axios.get(`http://localhost:3001/pokemons/${id}`)
                .then(result => result.data)
                .catch(error => error);
            // console.log(pokemonDetails)
            // id++;
            return disptach({
                type: FIND_POKEMON,
                payload: pokemonDetails,
            })
        } catch (error) {
            return error
        }
    }

}

export const createPokemon = (payload) => {
    const pokemon = {
        ...payload
    }
    return {
        type: CREATE_POKEMON,
        payload: pokemon,
    };
}
