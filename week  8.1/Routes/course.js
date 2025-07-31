const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");


courseRouter.get("/allcourses", function(req, res) {

})

courseRouter.post("/purchase", function(req, res) {

});

module.exports = {
    courseRouter: courseRouter
}