const { isNewExpression } = require("typescript");

const secretKey = process.env.SECRET_KEY;

const authenticate = function (req, res, next) {
    try {
        if (req.headers.authorization) {
            const verify = jwt.verify(req.headers.authorization, secretKey);
            if (verify) {
                req.userid = verify.user._id;
                req.name = verify.name;
                next();
            } else {
                res.status(401).send("Unauthorized");
            }
        } else {
            res.status(401).send("Unauthorized");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { authenticate }