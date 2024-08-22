import { useState, useEffect } from "react";
import axios from "axios";

export default function GetPokemonUseEffect() {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const fetchPokemon = () => {
      axios.get('http://localhost:8000/api/pokemon/getRandomPokemon')
        .then((res) => {
          const pokemon = res.data;
          setPokemonData(pokemon);
        })
        .catch((err) => {
          console.error(err);
        })
      }

      fetchPokemon();
    });
      
  return pokemonData;
}
