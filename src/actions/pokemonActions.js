// import axios from "axios";

// export const GetPokemonList = (page) => async dispatch => {
//   try{
//     dispatch({
//       type: "POKEMON_LIST_LOADING"
//     })


//     const perPage = 15;
//     const offset = (page * perPage) - perPage;


//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

//     dispatch({
//       type: "POKEMON_LIST_SUCCESS",
//       payload: res.data
//     })
//   } catch(e){
//     dispatch({
//       type: "POKEMON_LIST_FAIL"
//     })
//   }
// }

export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';
export const ADD_POKEMON = 'ADD_POKEMON';
export const ADD_POKEMONS = 'ADD_POKEMONS';

