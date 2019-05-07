const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./database/routes/users");
const itemRoutes = require("./database/routes/items");
const decorator = require("./database/decorator");
const passport = require("passport");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
require("dotenv").config();

//nextjs middleware
const next = require("next");
const dev = process.env.NODE_DEV !== "production";
const nextApp = next({ dev });

const PORT = process.env.PORT;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;
const SESSION_SECRET = process.env.SESSION_SECRET;

if (!PORT) {
  console.log("No Port Found");
}

if (!SESSION_SECRET) {
  console.log("No Session Secret Found!");
}
if (!REDIS_HOSTNAME) {
  console.log("No Redis Hostname Found!");
}

if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
  return process.exit(1);
}

nextApp.prepare().then(() => {
  const app = express();

  //server middleware
  app.use(bodyParser.json({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(decorator);
  app.use(
    session({
      store: new RedisStore({
        host: "localhost",
        port: 6379,
        url: process.env.REDIS_HOSTNAME
      }),
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use("/api", userRoutes);
  app.use("/api", itemRoutes);

  //smoke test
  app.get("/api/smoke", (req, res) => {
    res.json({ smoke: "test" });
  });

  // start server
  app.listen(PORT, () => {
    console.log(`Server stated on port: ${PORT}`);
  });
});
