import { useState, useEffect } from "react";
import axios from "axios";
import CookPokemonList from "./CookPokemonList.jsx";
import PokemonEncounter from "./PokemonEncounter.jsx";
import GetPokemonUseEffect from "../Helpers/getPokemonUseEffect.jsx";

function App() {
  const [pokemon, setPokemon] = useState({});
  const pokemonData = GetPokemonUseEffect();
  console.log(pokemonData);

  return (
    <div>
      <div>
        <PokemonEncounter />
      </div>
      <div>
        <CookPokemonList />
      </div>
    </div>
  )
}

export default App;
