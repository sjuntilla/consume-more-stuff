const express = require("express");
const Item = require("../../models/Item");
const router = express.Router();
//items routes

router.route("/items").get((req, res) => {
  return new req.database.Item().fetchAll().then(item => {
    res.json(item);
  });
});

router.route("/items").post((req, res) => {
  const created_at = new Date();
  //TBD user_id connection with item id
  const user_id = 1;
  const { name, description, price, category } = req.body;
  // console.log("POOOOOOOOOST");
  return new req.database.Item({
    name,
    user_id,
    description,
    price,
    category,
    created_at
  })
    .save()
    .then(item => {
      // console.log("HITTTTTTTTTTTTTTTT")
      return res.json({ success: true });
    })
    .catch(err => {
      // console.log(err);
      res.sendStatus(500);
    });
});

function isAuthenticated(req, res, done) {
  if (req.isAuthenticated()) {
    done();
  } else {
    const msg = `Not authenticated!`;
    console.log(msg);
    res.redirect("/");
  }
}

module.exports = router;
