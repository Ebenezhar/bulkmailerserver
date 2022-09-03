const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  }
});

module.exports = mongoose.model("Recipient", recipientSchema);
