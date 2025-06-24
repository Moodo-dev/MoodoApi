import { Router, request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import { loggedMood } from "./models/loggedMood";

const app = express();
const PORT = 5001;
const version = 0.1;

const router = Router();

const testMoods: loggedMood[] = [
  {
    id: Math.random().toString(36).substring(2, 8),
    mood: "😐",
  },
  {
    id: Math.random().toString(36).substring(2, 8),
    mood: "😃",
    note: "Had a nice walk outside.",
  },
];

app.use(bodyParser.json());

app.get("/", (_reg, res) => {
  res.send(`Moodo API is running on version ${version}...`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
