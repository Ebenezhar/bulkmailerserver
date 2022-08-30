const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/users", (req, res) => {
  res.send("Hello, Auth End Point!");
});

module.exports = router;
