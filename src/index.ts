import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import helmet from "helmet";

import express from "express";
import { MovieController } from "./modules/movie/controller/MovieController";
import { GameController } from "./modules/games/controller/GameController";
import { BookController } from "./modules/books/controller/BookController";

const PORT = process.env.DEFAULT_PORT || 9369;
const DOMAIN_WHITELIST = process.env.ALLOWED_DOMAINS?.split(",") || [];

const app = express();
app.disable("x-powered-by");
app.use(helmet());

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (origin && DOMAIN_WHITELIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});

app.use((req, res, next) => {
  corsMiddleware(req, res, (err) => {
    return err ? res.status(403).send("Not allowed by CORS") : next();
  });
});

new MovieController(app);
new GameController(app);
new BookController(app);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
