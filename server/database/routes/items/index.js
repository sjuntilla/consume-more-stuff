const express = require("express");
const Item = require("../../models/Item");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const auth = require("../users");
//items routes

router.route("/items").get((req, res) => {
  return new req.database.Item().fetchAll().then(item => {
    res.json(item);
  });
});

router.post("/items", isAuthenticated, (req, res) => {
  const created_at = new Date();
  //TBD user_id connection with item id
  const user_id = 1;
  const { name, url, description, price, category } = req.body;
  console.log("POOOOOOOOOST");
  return new req.database.Item({
    name,
    url,
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

router.route("/items").delete((req, res) => {
  const deleted_at = new Date();
  let id = req.body.id;
  console.log("reqbody CHOSENNNNNN ID---------------------------------->", id);
  return new req.database.Item({ id })
    .where({ id })
    .destroy()
    .then(id => {
      return res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
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
