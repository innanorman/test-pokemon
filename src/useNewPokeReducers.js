import {CATCH_POKEMONS} from './types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CATCH_POKEMONS:
      return{
        ...state,
        myPokemonList: [...payload]
      }       
    default:
      return state;
  }
}