import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {NewPokeContext} from '../NewPokeContext';
import LoadingGif from '../images/loading.gif';
import './style.css';

const url = "https://pokeapi.co/api/v2/pokemon";
const Pokemon = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const {types: typePokemon, sprites, moves: movesPokemon}  = pokemonDetail || [];
  const {front_default} = sprites || {};
  

  const pokemonName = props.match.params.pokemon;
  const pokeContext = useContext({NewPokeContext});
  
  const fetchData = async () => {
    setLoading(true)
    try {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonDetail(result.data);
      setTimeout(() => setLoading(false), 3000)
      
      } catch (e) {
        if (e) {
          setError(e.message)
          console.log(error)
        }
      } 
  }

  useEffect(() => {  
    fetchData();
  }, []);

  const catchPokemon = (pokemon) => {
    setMyList(...myList, pokemon.name)
    history.goBack()
  }

  useEffect((pokemonDetail) => {
    if (pokemonDetail) {
      catchPokemon(pokemonDetail);
    }
  }, [])

  const showData = () => {
    if (pokemonDetail){
      return (
        <div className="pokemon-details-info">
          <img src={front_default} width={200} class="pokemon-image" />
          <button onClick={() => catchPokemon(pokemonDetail)}>Catch</button>

          <div className="type-section">
            <p>Type</p>
            <div className="type-list">
              {(typePokemon|| []).map((list) => (
                <p>{list.type.name}</p> 
              ))}
            </div>
          </div>
          
          <div className="type-section">
            <p>Move</p>
            <div className="movement">
              {(movesPokemon || []).map((list) => (
                <p>{list.move.name}</p> 
              ))}
            </div>
          </div>
        </div>
      )
    }
  }

  return(
    <div>
      {loading ? <img src={LoadingGif}/> : (
        <div className="pokemon-details">
          <p className="title">Hello <span className="name-pokemon">{pokemonDetail.name}</span></p>
          {showData()}
        </div>
      )}
      
    </div>
  )


} 
export default Pokemon;