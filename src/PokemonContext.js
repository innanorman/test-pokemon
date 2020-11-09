import React, {createContext} from 'react';
import { ADD_POKEMON } from './actions/pokemonActions';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  let initialState = {
    pokemons: []
  }
  const [state, dispatch] = usePokemonReducers();
  const { pokemons, capturedPokemons } = state;

  
  const addPokemons = (pokemons) => dispatch({type: ADD_POKEMON, pokemons});

  const providerValue = {
    pokemons,
    capturedPokemons,
    addPokemons
  }

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export { PokemonContext, PokemonProvider };