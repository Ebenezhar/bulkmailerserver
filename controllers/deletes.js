var ObjectId = require('mongoose').Types.ObjectId;
const Draft = require('../Schema/Draft');
const Recipient = require("../Schema/Recipient");

const deleteRecipient = async (req, res) => {
    const recipient = await Recipient.deleteOne({ _id: new ObjectId(req.params.id) });
    if (recipient) {
        res.json({ message: "Recipient deleted Successfully" })
    }
}

const deleteDraft = async (req, res) => {
    try {
        const result = await Draft.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result) {
            res.json({ message: "Draft deleted Successfully" })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { deleteRecipient, deleteDraft }