const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_ADMIN_SECRET = process.env.ADMIN;

function adminAuth(req, res, next) {
    const token = req.headers.authorization;

    const admin = jwt.verify(token, JWT_ADMIN_SECRET);
    if (admin) {
        req.adminId = admin.id;
        next();
    } else {
        res.status(403).json({
            message: "You are not Signed In!"
        })
    }
}

module.exports = {
    adminAuth,
    JWT_ADMIN_SECRET,
    jwt
}