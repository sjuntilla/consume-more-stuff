const express = require("express");
const Item = require("../../models/Item");
const router = express.Router();
//items routes

router.route("/items").get((req, res) => {
  return new req.database.Item().fetchAll().then(item => {
    res.json(item);
  });
})

router.route("/items").post((req, res) => {
  const { name, description, price, category } = req.body
  console.log("POOOOOOOOOST");
  return new req.database.Item({
    name,
    description,
    price,
    category
  }).save()
    .then(item => {
      console.log("HITTTTTTTTTTTTTTTT")
      return res.json({ success: true })
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})



module.exports = router;
