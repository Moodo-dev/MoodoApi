import { Router } from "express";
import { loggedMood } from "../models/loggedMood";

const router = Router();

let moods: loggedMood[] = [];

//! GET ENDPOINTS

router.get("/", (_req, res) => {
  res.json(moods);
});

router.get("/:id", (req, res) => {
  const idToSearch = req.params.id;
  const foundMood = moods.find((m) => m.id === idToSearch);
  if (foundMood) {
    res.json(foundMood);
  } else {
    res.status(404).json({
      message: "Logged mood not found",
    });
  }
});

//! POST ENDPOINTS

router.post("/", (req, res) => {
  const newMood = req.body as loggedMood;
  newMood.id = Math.random().toString(36).substring(2, 8);
  moods.push(newMood);
  res.status(201).json(newMood);
});

export { router, moods };
