const express = require("express");
const Item = require("../../models/Item");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const auth = require("../users");
//items routes

router.route("/items").get((req, res) => {
  console.log("GET AAAAAAAAAALLLLLLLLLLLLLL")
  return new req.database.Item().fetchAll().then(item => {
    res.json(item);
  });
});

router.post("/items", (req, res) => {
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
    .then((id) => {
      return res.json()
      console.log("DELETE----->")
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.route("/items").put((req, res) => {
  let id = parseInt(req.body.id);
  console.log('---------->id', id)

  const name = req.body.name;
  const url = req.body.url;
  const description = req.body.description;
  const price = req.body.price;
  const category = req.body.category;


  return new req.database.Item({ id })
    .save({ name, url, description, price, category })
    .then(() => {
      return res.json()
      console.log("----->EDIT!!!")
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
})


// function isAuthenticated(req, res, done) {
//   if (req.isAuthenticated()) {
//     done();
//   } else {
//     const msg = `Not authenticated!`;
//     console.log(msg);
//     res.redirect("/");
//   }
// }

module.exports = router;
