import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
// import { PokemonContext } from '../PokemonContext';

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  console.log('isi data', pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setPokemon(result.data.results)
    }
    fetchData();
  }, [])

  
  return(
    <div>
      hello
      <div className="pokemon-list">
        {pokemon.map((poke) => (
          <div className="list">
            {poke.name}
            <Link to={`/pokemon/${poke.name}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonList;