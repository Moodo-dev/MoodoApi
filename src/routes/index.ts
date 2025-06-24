import { Router } from "express";
import { loggedMood } from "../models/loggedMood";
import { router as moodRouter } from "./moodRoutes";

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

router.use("/moods", moodRouter);

export { router };
