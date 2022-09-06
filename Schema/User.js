const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: String,
  email: { type: String, required: true },
  age: Number,
  country: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  rnum: Number
});

module.exports = mongoose.model("User", userSchema);
