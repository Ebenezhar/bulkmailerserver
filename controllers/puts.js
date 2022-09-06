var ObjectId = require('mongoose').Types.ObjectId;
const Recipient = require("../Schema/Recipient");

const updateRecipient = async (req, res) => {
    try {
        const recipient = await Recipient.updateOne({ _id: new ObjectId(req.params.id) }, { $set: { name: req.body.name, email: req.body.email, category: req.body.category, } });
        if (recipient.acknowledged) {
            res.status(200).send({ message: "Recipient details updated successfully" })
        }
        else {
            res.status(404).send({ message: "Something went wrong" })
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { updateRecipient }