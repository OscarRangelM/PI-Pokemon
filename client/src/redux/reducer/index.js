import {
    ADD_FAVORITE,
    DELETE_FAVORITE,
    FIND_POKEMON,
    CREATE_POKEMON
} from "../actions/index.js";

const initialState = {
    pokemon: [],
    pokemonDetail: {},
    pkmnFavorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return{
                ...state,
                pkmnFavorites: unfavorite,
            };
            case FIND_POKEMON:
                return {};
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
