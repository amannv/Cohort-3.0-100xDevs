const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_USER_SECRET = process.env.SECRET;

function userAuth(req, res, next) {
    const token = req.headers.authorization;

    const user = jwt.verify(token, JWT_USER_SECRET);
    if (user) {
        req.userId = user.id;
        next();
    } else {
        res.status(403).json({
            message: "You are not Signed In!"
        })
    }
}

module.exports = {
    jwt,
    JWT_USER_SECRET,
    userAuth
}