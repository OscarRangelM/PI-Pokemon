import {
    GET_POKEMONS,
    GET_POKEMONS_API,
    GET_POKEMONS_TYPE,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    FIND_POKEMON,
    CREATE_POKEMON,
    FILTER_AZ,
    FILTER_ATTK,
    SEARCH_POKEMON,
} from "../actions/index.js";

const initialState = {
    pokemon: [],
    types: [],
    pokemonDetail: {},
    pkmnFavorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_API:
            return {
                ...state,
                pokemon: action.payload,
            };

        case GET_POKEMONS:
            return {
                ...state,
                pokemon: action.payload,
            }

        case GET_POKEMONS_TYPE:
            return {
                ...state,
                types: action.payload,
            };

        case FIND_POKEMON:
            return {
                ...state,
                pokemonDetail: action.payload,
            };

        case FILTER_AZ:
            return {};

        case FILTER_ATTK:
            return {};

        case ADD_FAVORITE:
            let favorite = [...state.pkmnFavorites, action.payload];
            return {
                ...state,
                pkmnFavorites: favorite,
            };

        case DELETE_FAVORITE:
            let unfavorite = state.pkmnFavorites.filter((pokemon) => {
                return pokemon.id !== action.payload
            })
            return {
                ...state,
                pkmnFavorites: unfavorite,
            };

        case CREATE_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon,
                action.payload],
            };

        case SEARCH_POKEMON:
            console.log(action.payload)
            return {
                ...state,
                pokemon: action.payload,
            }

        default:
            return state;
    }

}

export default rootReducer;
