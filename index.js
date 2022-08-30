const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const dotenv = require("dotenv").config();
const URL = process.env.DB;
const User = require("./Schema/User");
const routes = require("./Routes/auth");
mongoose.connect(URL);

run();
async function run() {
  try {
    const users = await User.findOne({ age: 25 });
    console.log(users);
  } catch (error) {
    console.log(error);
  }

  // const user = await User.create({
  //   firstName: "kumar",
  //   age: 25,
  //   email: "kumar@gmail.com",
  //   gender: "male",
  //   country: "India",
  //   password: "zxcv",
  // });
  // console.log(user);
}

app.use("/", routes);

app.listen(process.env.PORT || 3001);
