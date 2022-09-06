const express = require("express");
const router = express.Router();
const path = require("path");
const { register, sendRegMail, test } = require("../controllers/posts.js")

router.post("/", test);
router.post("/registerUser", register);
router.post('/sendmail', sendRegMail)

module.exports = router;
