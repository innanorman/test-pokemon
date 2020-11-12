import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import LoadingGif from '../images/loading.gif';


const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('isi data', pokemon);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setPokemon(result.data.results)
      setLoading(false)
    }
    fetchData();
  }, [])

  
  return(
    <div>
      {loading ? <img src={LoadingGif}/> : (
        <div className="pokemon-list">
          {pokemon.map((poke) => (
            <div className="list">
              <p className="text-name">{poke.name}</p>
              <Link 
                to={`/pokemon/${poke.name}`} 
                className="button-detail"
              > 
                View
              </Link>
            </div>
          ))}
        </div>
      )
      }
      
    </div>
  )
}

export default PokemonList;