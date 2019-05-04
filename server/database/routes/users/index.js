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

const SALT_ROUND = 12;

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
      return res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

//   return new req.database.User({
//     first_name,
//     last_name,
//     email,
//     hashedPassword,
//     username
//   })
//     .save()
//     .then(user => {
//       return res.json({ success: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
