import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5001;
const version = 0.1;

app.use(bodyParser.json());

//TODO: once we have created a route, use the route as well

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export { app };
