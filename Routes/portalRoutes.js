const express = require("express");
const { authenticate } = require("../Authenticate/authenticate");
const { deleteRecipient, deleteDraft } = require("../controllers/deletes");
const { addRecipients, sendMail, addToDraft } = require("../controllers/posts");
const { updateRecipient } = require("../controllers/puts");
const { readRecipients, readDrafts, readUser } = require("../controllers/reads");
const router = express.Router();

router.get('/userdetails', authenticate, readUser)
router.post('/addRecipients', authenticate, addRecipients)
router.get('/recipients', authenticate, readRecipients)
router.delete('/recipient/:id', deleteRecipient)
router.delete('/deletedraft/:id', deleteDraft)
router.post('/sendmail', sendMail)
router.post('/addtodraft', addToDraft)
router.put('/editrecipient/:id', updateRecipient)
router.get('/draftedmails', authenticate, readDrafts)
module.exports = router;