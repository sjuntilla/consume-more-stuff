const express = require("express");
const Item = require("../../models/Item");
const router = express.Router();
//items routes

router.route("/items").get((req, res) => {
  return new req.database.Item().fetchAll().then(item => {
    res.json(item);
  });
});

module.exports = router;
