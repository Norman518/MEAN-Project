const jwt = require("jsonwebtoken");

module.exports = (res, req, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "STrsST3!$%Jaf3@");
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};
