import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

const PORT = 4321;

app.get("/", (re, res) => {
  res.send("Basic Express Server");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});
