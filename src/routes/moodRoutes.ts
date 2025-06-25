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
  const body = req.body as loggedMood;

  const newId = Math.random().toString(36).substring(2, 8);

  const { id, ...bodyWithoutId } = body;
  const finalLoggedMood = { id: newId, ...bodyWithoutId };
  moods.push(finalLoggedMood);
  res.status(201).json(finalLoggedMood);
});

//! PUT ENDPOINTS

router.put("/:id", (req, res) => {
  const idToUpdate = req.params.id as string;
  const index = moods.findIndex((m) => m.id === idToUpdate);

  if (index !== -1) {
    moods[index] = {
      id: idToUpdate,
      mood: req.body.mood,
      note: req.body.note,
    };

    res.json(moods[index]);
  } else {
    res.status(404).json({
      message: "Logged mood not found",
    });
  }
});

//! DELETE ENDPOINTS

router.delete("/:id", (req, res) => {
  const idToDelete = req.params.id as string;
  const index = moods.findIndex((m) => m.id === idToDelete);

  if (index !== -1) {
    moods.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({
      message: "Logged mood not found",
    });
  }
});

export { router, moods };
