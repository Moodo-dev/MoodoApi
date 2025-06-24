import { Router } from "express";
import { loggedMood } from "../models/loggedMood";

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

export { router };
