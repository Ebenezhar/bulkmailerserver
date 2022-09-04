var ObjectId = require('mongoose').Types.ObjectId;
const Recipient = require("../Schema/Recipient");

const readRecipients = async (req, res) => {
    const recipients = await Recipient.find({ ownerId: new ObjectId(req.params.id) });
    res.send(recipients);
}
module.exports = { readRecipients }