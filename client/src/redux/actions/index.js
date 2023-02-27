export const GET_POKEMONS = 'GET_POKEMONS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FIND_POKEMON = 'FIND_POKEMON';
export const CREATE_POKEMON = 'CREATE_POKEMON';

export const getPokemons = () => {
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
