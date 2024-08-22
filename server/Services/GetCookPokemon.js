import { saveCookPokemonDictionary } from "../Helpers/TempCache.js";

function getCookPokemon() {
  return (req, res, next) => {
    try {
      res.status(200).send(saveCookPokemonDictionary)
      next();
    } catch(err) {
      console.error(err);
      next();
    }
  }
}

export { getCookPokemon }
