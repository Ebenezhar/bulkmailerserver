const express = require("express");
const { login } = require("../controllers/posts");
const router = express.Router();

router.post("/", login);


module.exports = router;