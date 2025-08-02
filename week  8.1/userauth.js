const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function userAuth(req, res, next) {
    const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_SECRET);
    if (response) {
        req.userId = response.id;
        res.json({
            message: "You are Verified"
        })
        next();
    } else {
        res.status(403).json({
            message: "You are not Signed In!"
        })
    }
}

module.exports = {
    jwt,
    JWT_SECRET,
    userAuth
}