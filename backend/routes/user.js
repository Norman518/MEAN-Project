const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const user = require("../models/user");
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
          result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Auth failed" });
      }
      return bcrypt.compare(password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({ message: "Auth failed" });
      }
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        "STrsST3!$%Jaf3@",
        { expiresIn: "1h" }
      );
    })
    .catch(() => {
      return res.status(401).json({ message: "Auth failed" });
    });
});

module.exports = router;
