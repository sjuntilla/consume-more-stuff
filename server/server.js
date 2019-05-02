const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) {
  console.log("No Port Found");
}

const app = express();

app.use(bodyParser.json());

// start server
app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});
