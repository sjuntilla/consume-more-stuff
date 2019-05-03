const express = require("express");
const router = express.Router();

router.route("/register").post((req, res) => {
  const { first_name, last_name, email, hashedPassword, username } = req.body;
  return new req.database.User({
    first_name,
    last_name,
    email,
    hashedPassword,
    username
  })
    .save()
    .then(user => {
      return res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
