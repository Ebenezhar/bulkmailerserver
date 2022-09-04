const rn = require("random-number");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const nodemailer = require("nodemailer");
const User = require("../Schema/User");
const usermail = process.env.USER;
const mailpassword = process.env.PASSWORD;
const secretKey = process.env.SECRET_KEY
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Recipient = require("../Schema/Recipient");
const options = {
    min: 1000,
    max: 9999,
    integer: true,
};

const test = (req, res) => {
    console.log(req.body);
}

const register = async (req, res) => {
    try {
        delete req.body.verPassword;
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);
        req.body.password = hash;
        const user = await User.create(req.body);
        res.status(200).send({ message: `${req.body.firstName}, your profile has been registered successfully` })
    } catch (error) {
        console.log(error);
    }
}

const sendMail = (req, res) => {
    try {
        if (req.body) {
            let randomnum = rn(options);
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: `${usermail}`,
                    pass: `${mailpassword}`,
                },
            });

            var mailOptions = {
                from: `${usermail}`,
                to: `${req.body.email}`,
                subject: "User verification",
                text: `${randomnum}`,
                //html: `<h2>Password : ${req.body.Password}</h2>`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.json({
                        message: "Error",
                    });
                } else {
                    userNumber = `${randomnum}`;
                    // console.log("Email sent: " + info.response);
                    res.json({
                        message: "Email sent",
                        otp: `${randomnum}`,
                    });
                }
            });
        } else {
            res.status(400).json({ message: "Something wrong happened" });
        }
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const match = await bcryptjs.compare(req.body.password, user.password);
            if (match) {
                const token = jwt.sign({ id: user.id, name: user.firstName }, secretKey);
                res.status(200).json({
                    message: "Successfully Logged in",
                    token: token,
                    name: user.firstName,
                    gender: user.gender,
                    id: user.id,
                });
            } else {
                res.status(400).json({ message: "Password is incorrect" });
            }
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
    }
}

const addRecipients = async (req, res) => {
    const addRecipients = await Recipient.insertMany(req.body);
    console.log(addRecipients);
    res.json({ message: "Recipients added successfully" });
}


module.exports = { register, sendMail, test, login, addRecipients };


