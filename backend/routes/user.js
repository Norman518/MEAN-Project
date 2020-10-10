const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    const user = new User({
      email,
      password: hash,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User created!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
});

module.exports = router;
