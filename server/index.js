import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// const bodyParser = require("body-parser");
import pokemonRouter from "./Api/pokemon.js";

const app = new express();
const port = 8000;

app
  .use(cors())
  .use(express.json())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded( { extended: true } ))
  .use(express.urlencoded({ extended: true }))
  .use('/api', pokemonRouter)
  // .use(express.static(path.resolve(_)))

app.listen(port, () => console.log('listening on port ', port));
export default app;
