const router = require("express").Router();
const User = require("../../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const next = require("next");

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
  "local",
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log("password", password);
    console.log("Local Strat being called..");
    User.where({ email })
      .fetch()
      .then(user => {
        console.log("user Local Strat", user.toJSON());
        user = user.toJSON();
        bcrypt
          .compare(password, user.pw)
          .then(res => {
            console.log("res", res);
            console.log("password", password);
            console.log("userHASH", user.pw);
            console.log("typeof_password", typeof password);
            console.log("typeofuserhash", typeof user.pw);
            if (res) {
              console.log("user is authenticated!");
              done(null, user);
            } else {
              console.log("user is not authenticated");
              done(null, false);
            }
          })
          .catch(err => {
            console.log("err", err);
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
  console.log("req.body", req.body);
  console.log("registering......");
  const created_at = new Date();

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
        pw: hashPassword,
        username,
        created_at
      }).save();
    })
    .then(user => {
      console.log("Registration successful!");
      // res.redirect("/");
      return user.toJSON();
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

//login route to authenticate user.
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  (req, res) => {
    console.log("req.body", req.body);
    console.log("session key", req.session.key);
    const email = req.body.email;
    User.where({ email })
      .fetch()
      .then(user => {
        user = user.toJSON();
        const userData = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username
        };
        req.session.user = req.body;
        console.log("session user", req.session.user);
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

//function to check authentication for api calls.
function isAuthenticated(req, res, done) {
  if (req.isAuthenticated()) {
    console.log("req auth", req.isAuthenticated());
    done();
  } else {
    console.log("req auth", req.isAuthenticated());
    console.log("Not Authenticated!");
    res.redirect("/"); //change this redirect to another page??
  }
}

router.post("/logout", (req, res) => {
  console.log("before", req.session);
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        return next(err);
      } else {
        console.log("after", req.session);
        return res.send("user logged out");
      }
    });
  }
});

//Smoke test for authentication route.
router.get("/secret", isAuthenticated, (req, res) => {
  console.log("secret authed!");
  res.send("YOU ARE AUTHENTICATED!!!");
});

module.exports = router;
