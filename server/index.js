import express from "express";
import pokemonRouter from "./Api/pokemon.js";

const app = new express();
const port = 8000;

app
  .use(express.json())
  .use(express.urlencoded( { extended: true } ))
  // .use(express.static(path.resolve(_)))
  .use('/api', pokemonRouter);

app.listen(port, () => console.log('listening on port ', port));
export default app;
