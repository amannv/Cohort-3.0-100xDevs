const { Router } = require("express");
const courseRouter = Router();


const { purchaseModel, courseModel } = require("../db");
const { userAuth } = require("../Auth/userauth")


courseRouter.get("/preview", async function(req, res) {
    const courses = await courseModel.find({});
    return res.status(200).json({
        courses
    })
})

courseRouter.post("/purchase", userAuth, async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    const purchased = await purchaseModel.create({
        userID: userId,
        courseID: courseId
    });

    if (purchased) {
        return res.status(200).json({
            message: "Course has been purchased"
        });
    }
});

module.exports = {
    courseRouter: courseRouter
}