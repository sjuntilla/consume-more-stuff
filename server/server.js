const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const itemRoutes = require("./routes/items");
const decorator = require("./database/decorator");
require("dotenv").config();

const PORT = process.env.PORT;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) {
  console.log("No Port Found");
}

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(decorator);

app.get("/api/smoke", (req, res) => {
  res.json({ smoke: "test" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});
