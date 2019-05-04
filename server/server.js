const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./database/routes/users");
const itemRoutes = require("./database/routes/items");
const decorator = require("./database/decorator");
const passport = require("passport");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
require("dotenv").config();

const PORT = process.env.PORT;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) {
  console.log("No Port Found");
}

const app = express();

//server middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(decorator);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", userRoutes);
// app.use("/items", itemRoutes);

//smoke test
app.get("/api/smoke", (req, res) => {
  res.json({ smoke: "test" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});
