const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    { id: "arawfawtata35", title: "first post", content: "from server" },
  ];
  res.status(200).json({ message: "Posts fetched successfully.", posts });
});

module.exports = app;
