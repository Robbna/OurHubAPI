import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { MovieController } from "./modules/movie/controller/MovieController";
import { GameController } from "./modules/games/controller/GameController";
import { BookController } from "./modules/books/controller/BookController";

const PORT = process.env.DEFAULT_PORT || 9369;

const app = express();

const whitelist = process.env.ALLOWED_DOMAINS!.split(" ");

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin!) === -1) {
      callback(new Error(`Not allowed by CORS`));
      return;
    }
    callback(null, true);
  },
};

app.use(cors(corsOptions));

new MovieController(app);
new GameController(app);
new BookController(app);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
