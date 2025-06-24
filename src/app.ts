import express from "express";
import bodyParser from "body-parser";
import { router as master } from "./routes";

const app = express();
const PORT = 5001;
const version = 0.1;

app.use(bodyParser.json());

app.use("/api", master);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export { app };
