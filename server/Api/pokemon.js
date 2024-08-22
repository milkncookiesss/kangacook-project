import { Router } from "express";
import { getRandomPokemon } from "../Services/GetRandomPokemon.js";
import { saveCookPokemon } from "../Services/SaveCookPokemon.js";
import { getCookPokemon } from "../Services/GetCookPokemon.js";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon/getRandomPokemon", getRandomPokemon());
pokemonRouter.get("/pokemon/getCookPokemon", getCookPokemon());
pokemonRouter.post("/pokemon/saveCookPokemon", saveCookPokemon());

export default pokemonRouter;
