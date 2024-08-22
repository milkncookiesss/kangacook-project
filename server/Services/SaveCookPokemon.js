import { saveCookPokemonDictionary } from "../Helpers/TempCache.js";

function saveCookPokemon() {
  return async (req, res, next) => {
    const { num, sprite } = req.body;
    const savedPokemonObj = {};
    try {
      savedPokemonObj[num] = { num, sprite };
      saveCookPokemonDictionary.push(savedPokemonObj);
      res.status(200).send(saveCookPokemonDictionary);
      next();
    } catch(err) {
      console.error(err)
      next();
    }
  }
}

export { saveCookPokemon };
