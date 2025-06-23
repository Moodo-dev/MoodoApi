import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5001;
const version = 0.1

app.use(bodyParser.json());

app.get("/", (_reg, res) => {
  res.send(`Moodo API is running on version ${version}...`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
