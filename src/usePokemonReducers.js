import  {useReducer } from 'react';
import { ADD_POKEMONS } from './actions/pokemonActions';

const addPokemons = (pokemons, state) => ({
  pokemons: pokemons,
  capturedPokemons: state.capturedPokemons
})


const pokemonReducer = (state, action) => {
  switch (action.type){
    case ADD_POKEMONS: 
      return addPokemons(action.pokemons, state);
    default:
      return state;
  }
};

export const usePokemonReducer = () => 
useReducer(pokemonReducer, {
  pokemons: [],
  capturedPokemons: []
})