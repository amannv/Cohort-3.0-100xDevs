const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const bcrypt = require("bcrypt");
const { jwt, JWT_SECRET, userAuth } = require("../userauth")

userRouter.post("/signup", async function(req, res) {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const hashedpassword = await bcrypt.hash(password, 5);

    const response =  await userModel.create({
        username: username,
        password: hashedpassword,
        email: email
    })
    
    if (response) {
    res.json({
        message: "You are Signed Up!"
    })
} else {
    res.status(503).json({
        message: "User is already present"
    })
}

});

userRouter.post("/login", async function(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({
        email: email
    });

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id
        }, JWT_SECRET)
        res.json({
        token: token
    });
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
    

});

userRouter.get("/purchases", userAuth,async function(req, res) {
    const userID = req.userID;

    const purchasedCourse = await userModel.findOne({
        _id: userID
    })

});

module.exports = {
    userRouter: userRouter
}