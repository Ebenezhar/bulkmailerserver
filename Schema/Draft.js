const mongoose = require("mongoose");

const draftSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    }
})

module.exports = mongoose.model("Draft", draftSchema);