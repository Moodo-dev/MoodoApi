import { Router } from "express";
import { loggedMood } from "../models/loggedMood";

const router = Router();

let moods: loggedMood[] = [];

router.get("/", (_req, res) => {
  res.json(moods);
});

router.post("/", (req, res) => {
  const newMood = req.body as loggedMood;
  newMood.id = Math.random().toString(36).substring(2, 8);
  moods.push(newMood);
  res.status(201).json(newMood);
});

export { router };
