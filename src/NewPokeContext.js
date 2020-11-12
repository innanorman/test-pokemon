import React, { createContext, useReducer } from 'react';
import { CATCH_POKEMONS} from './types';
import useNewPokeReducer from './useNewPokeReducers'; 
const NewPokeContext = createContext({});

const NewPokeProvider = (props) => {
  let initialState = {
    myPokemonList: []
  }
  const [state, dispatch] = useReducer(useNewPokeReducer, initialState)

  const catchPokemon = (pokemon) => {
    dispatch({type: CATCH_POKEMONS, myPokemonList: pokemon})
  }

  return (
    <NewPokeContext.Provider value={{
       myPokemonList: state.myPokemonList,
      catchPokemon
    }}>
      {props.children}
    </NewPokeContext.Provider>
  )
}

export { NewPokeContext, NewPokeProvider }