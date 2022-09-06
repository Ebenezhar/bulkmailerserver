const express = require("express");
const { sendVerMail, verifyOtp, resetPassword } = require("../controllers/posts");
const router = express.Router();
router.post('/sendvermail', sendVerMail)
router.post('/verifyotp', verifyOtp)
router.post('/resetpassword', resetPassword)

module.exports = router;