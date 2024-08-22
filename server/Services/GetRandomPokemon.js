import pokemonRng from "../Helpers/randomNumGen.js";
import fetch from "node-fetch";
import { randomPokemonEncounterCache } from "../Helpers/TempCache.js";

function getRandomPokemon() {
  return async (req, res, next) => {
    try {
      let pokemonNum = pokemonRng();
      const pokemonData = {};
      const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonNum;
      const pokedexUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonNum;
      const pokemonResponse = await fetch(pokemonUrl);
      const pokedexResponse = await fetch(pokedexUrl);
      const pokemonDataRes = await pokemonResponse.json();
      const pokedexDataRes = await pokedexResponse.json();

      pokemonData.name = pokemonDataRes.forms[0].name;
      pokemonData.num = pokemonNum;
      pokemonData.height = (pokemonDataRes.height/10) + " meters";
      pokemonData.weight = (pokemonDataRes.weight * 100) + " grams";
      pokemonData.sprite = pokemonDataRes.sprites.front_default;
      pokemonData.description = pokedexDataRes.flavor_text_entries[1].flavor_text;

      console.log('this is res ', pokemonDataRes);
      console.log(pokemonData);

      randomPokemonEncounterCache[pokemonNum] = pokemonData;
      res.status(200).send(pokemonData);
      next();
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
      next();
    }
  }
}

export { getRandomPokemon };
