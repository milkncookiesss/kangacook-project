import { Router } from "express";
import { getRandomPokemon } from "../Services/getRandomPokemon.js";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon/getRandomPokemon", getRandomPokemon());

export default pokemonRouter;
