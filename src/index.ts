import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.get("/", (_reg, res) => {
  res.send("Moodo API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
