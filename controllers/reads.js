var ObjectId = require('mongoose').Types.ObjectId;
const Draft = require('../Schema/Draft');
const Recipient = require("../Schema/Recipient");
const User = require('../Schema/User');

const readRecipients = async (req, res) => {
    try {
        const recipients = await Recipient.find({ ownerId: new ObjectId(req.userid) });
        res.send(recipients);
    } catch (error) {
        console.log(error);
    }

}

const readDrafts = async (req, res) => {
    try {
        console.log(req.userid);
        const drafts = await Draft.find({ ownerId: new ObjectId(req.userid) });
        res.status(200).send(drafts);
    } catch (error) {
        console.log(error);
    }
}

const readUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.userid });
        delete user.password;
        delete user.rnum;
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
}
module.exports = { readRecipients, readDrafts, readUser }