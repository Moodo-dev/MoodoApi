import express from "express";
import bodyParser from "body-parser";
import { router as master } from "./routes";
import cors from "cors";

const app = express();
const PORT = 5001;
const version = 0.1;

//TODO: Future proof this for local hosting on other users
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json());

app.use("/api", master);

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT} on version ${version}`
  );
});

export { app };
