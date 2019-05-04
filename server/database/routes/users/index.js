const router = require("express").Router();
const User = require("../../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");

passport.serializeUser((user, done) => {
  done(null, {
    email: user.email,
    junk: "randomData"
  });
});

passport.deserializeUser((user, done) => {
  User.where({ email: user.email })
    .fetch()
    .then(user => {
      user = user.toJSON();
      done(null, user);
    })
    .catch(err => {
      console.log("err", err);
    });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log("Local Strat being called..");
    User.where({ email })
      .fetch()
      .then(user => {
        console.log("user Local Strat", user.toJSON());
        user = user.toJSON();
        bcrypt.compare(password, user.hashedPassword).then(res => {
          if (res) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      })
      .catch(err => {
        console.log("AUTH ERROR", err);
        done(null, false);
      });
  })
);

const SALT_ROUND = 12;

//register route to post a new user to database with a hashed password
router.route("/register").post((req, res) => {
  console.log("hello");
  const { first_name, last_name, email, password, username } = req.body;

  console.log("registering......");

  bcrypt
    .genSalt(SALT_ROUND)
    .then(salt => {
      console.log("got the salt round..");
      console.log("bcrypt password", password);
      return bcrypt.hash(password, salt);
    })
    .then(hashPassword => {
      return new req.database.User({
        first_name,
        last_name,
        email,
        hashedPassword: hashPassword,
        username
      }).save();
    })
    .then(user => {
      console.log("Registration successful!");
      return res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

//login route to authenticate user.
router.route("/login").post(
  passport.authenticate("local", { failureRedirect: "/" }, (req, res) => {
    const email = req.body.email;
    User.where({ email })
      .fetch()
      .then(user => {
        console.log("user", user.toJSON());
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  })
);

module.exports = router;
