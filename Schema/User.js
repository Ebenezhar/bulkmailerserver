const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  age: Number,
  email: { type: String, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  phone: String,
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
