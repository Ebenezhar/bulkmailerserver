var ObjectId = require('mongoose').Types.ObjectId;
const Recipient = require("../Schema/Recipient");

const deleteRecipient = async (req, res) => {
    console.log(req.params.id);
    const recipient = await Recipient.deleteOne({ _id: new ObjectId(req.params.id) });
    if (recipient) {
        res.json({ message: "Recipient deleted Successfully" })
    }
}

module.exports = { deleteRecipient }