import {
    GET_POKEMONS,
    GET_POKEMONS_API,
    GET_POKEMONS_TYPE,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    FIND_POKEMON,
    CREATE_POKEMON,
    FILTER_AZ,
    FILTER_DB,
} from "../actions/index.js";

const initialState = {
    pokemon: {
        pokemonAPI: [],
        pokemonDB: [],
    },
    types: [],
    pokemonDetail: {},
    pkmnFavorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_API:
            let allPokemonDB = [];
            for(let i = 0; i < 12; i++){
                allPokemonDB = [...state.pokemon.pokemonDB, action.payload]
            }
            return {
                ...state,
                pokemon: allPokemonDB,
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
                
            };

        case FILTER_AZ:
            return {};

        case FILTER_DB:
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

        default:
            return state;
    }

}

export default rootReducer;
