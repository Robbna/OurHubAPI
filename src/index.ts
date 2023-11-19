import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.DEFAULT_PORT || 9369;

app.get("/", (_req, res) => {
  res.send(process.env.API_KEY);
});

app.get("/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
