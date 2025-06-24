import { Router } from "express";
import { loggedMood } from "../models/loggedMood";

const router = Router();

let moods: loggedMood[] = [];

router.get("/", (_req, res) => {
  res.json(moods);
});
