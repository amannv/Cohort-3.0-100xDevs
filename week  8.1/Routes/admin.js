const { Router } = require("express")
const adminRouter = Router();
const { adminModel } = require("../db");


adminRouter.post("/signup", function (req, res) {
    
});

adminRouter.post("/signin", function (req, res) {

});


adminRouter.post("/createcourse", function (req, res) {

});

adminRouter.put("/coursesetting", function (req, res) {

});

adminRouter.get("/courses/all", function (req, res) {
    res.send("Hello There!");

});

module.exports = {
    adminRouter: adminRouter
}