const express = require("express");
const router = express.Router();
const path = require("path");
const { register, sendMail, test } = require("../controllers/posts.js")

router.post("/", test);
router.post("/registerUser", register);
router.post('/sendmail', sendMail)

module.exports = router;
