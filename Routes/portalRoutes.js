const express = require("express");
const { addRecipients } = require("../controllers/posts");
const router = express.Router();

router.post('/addRecipients', addRecipients)

module.exports = router;