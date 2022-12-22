const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors({ orgin: "*" }));
const dotenv = require("dotenv").config();
const URL = process.env.DB;
const User = require("./Schema/User");
const Recipient = require("./Schema/Recipient");
const registerRoutes = require("./Routes/registerRoutes");
const loginRoutes = require('./Routes/loginRoutes.js')
const portalRoutes = require('./Routes/portalRoutes.js')
const rstPwdRoutes = require('./Routes/rstPwdRoutes.js');
mongoose.set("strictQuery", false);
mongoose.connect(URL);

app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/portal", portalRoutes);
app.use("/reset", rstPwdRoutes);
app.listen(process.env.PORT || 5000);
