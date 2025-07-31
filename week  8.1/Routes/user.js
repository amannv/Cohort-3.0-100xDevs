const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");

userRouter.post("/signup", function(req, res) {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

});

userRouter.post("/login", function(req, res) {

});

userRouter.get("/purchases", function(req, res) {

});

module.exports = {
    userRouter: userRouter
}