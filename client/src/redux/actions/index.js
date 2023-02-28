import axios from 'axios';


export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_API = 'GET_POKEMONS';
export const GET_POKEMONS_TYPE = 'GET_POKEMONS_TYPE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FIND_POKEMON = 'FIND_POKEMON';
export const FILTER_AZ = 'FILTER_AZ';
export const FILTER_DB = 'FILTER_DB';
export const CREATE_POKEMON = 'CREATE_POKEMON';


export const getPokemons = () => {
    return async (disptach) => {
        try {
            const pokemons = await axios.get('http://localhost:3001/pokemons')
                .then(result => result.data)
                .catch(error => console.log('Aqui hay un error'));
            return disptach({
                type: GET_POKEMONS,
                payload: pokemons,
            });
        } catch (error) {
            console.log('Aqui hay un error')
        };
    };

};

// console.log(getPokemons);

export const getPokemonsAPI = (id) => {
    return async (disptach) => {
        try {
            const pokemonAPI = await axios.get(`http://localhost:3001/pokemons/15`)
                .then(result => result.data)
                .catch(error => error);
            console.log(id)
            // id++;
            return disptach({
                type: GET_POKEMONS_API,
                payload: pokemonAPI,
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

export const findPokemon = () => {
    return {}
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
