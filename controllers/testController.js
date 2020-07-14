const express = require("express");

const router = express.Router();

const test = require("../models/test");

router.get("/", (req, res) => {
  test.all();
  res.send("Hello world!");
});

module.exports = router;
