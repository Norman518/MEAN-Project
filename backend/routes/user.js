const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  let fetchedUser;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Auth failed" });
      }
      fetchedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({ message: "Auth failed" });
      }
      const userId = fetchedUser._id;
      const token = jwt.sign(
        { email: fetchedUser.email, userId },
        "STrsST3!$%Jaf3@",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token, expiresIn: 3600, userId });
    })
    .catch(() => {
      return res.status(401).json({ message: "Auth failed" });
    });
});

module.exports = router;
