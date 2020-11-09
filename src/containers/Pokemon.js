import React, { useEffect, useState } from "react";
import axios from 'axios';

const url = "https://pokeapi.co/api/v2/pokemon";
const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const [pokemonDetail, setPokemonDetail] = useState([]);

  const pokeUrl = `${url}/${pokemonName}`;
  console.log('isi poke url', pokeUrl)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(pokeUrl);
      setPokemonDetail(result.data);
      console.log('isi result',result)
    }
    fetchData();
    
  }, []);

  console.log('poke detail', pokemonDetail)

  return(
    <div>
      hello
      <div className="pokemon-details">
        
        {pokemonDetail.name}
        {/* {console.log('isi sprites', pokemonDetail.sprites.front_default)} */}
        {/* <img src={pokemonDetail.sprites.front_default} /> */}

        {console.log('isi types', pokemonDetail.types)}
        {pokemonDetail.types.map(type => (
          <p>{type.name}</p>
        ))}
        
      </div>
    </div>
  )


} 
export default Pokemon;