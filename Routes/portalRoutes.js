const express = require("express");
const { deleteRecipient } = require("../controllers/deletes");
const { addRecipients } = require("../controllers/posts");
const { readRecipients } = require("../controllers/reads");
const router = express.Router();

router.post('/addRecipients', addRecipients)
router.get('/recipients/:id', readRecipients)
router.delete('/recipient/:id', deleteRecipient)
module.exports = router;