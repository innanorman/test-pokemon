import {CATCH_POKEMON} from './types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CATCH_POKEMON:
      return{
        ...state,
        myPokemonList: [...payload]
      }       
    default:
      return state;
  }
}