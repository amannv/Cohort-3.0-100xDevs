const { Router } = require("express");
const { z } = require("zod");
const bcrypt = require("bcrypt");
require("dotenv").config();


const userRouter = Router();
const { userModel, purchaseModel, courseModel } = require("../db");
const { jwt, JWT_USER_SECRET ,userAuth } = require("../Auth/userauth");
const { default: mongoose } = require("mongoose");



userRouter.post("/signup", async function(req, res) {
try {
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(8),
        firstName: z.string().min(3).max(8),
        lastName: z.string().min(3).max(8),
    });

    const parsedBody = requiredBody.safeParse(req.body);
    
    if (!parsedBody.success) {
       return res.status(200).json({
            message: "Data is not valid",
            error: parsedBody.error
        });
    }

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;


    const hashedpassword = await bcrypt.hash(password, 5);

    const user =  await userModel.create({
        firstName: firstName,
        lastName: lastName,
        password: hashedpassword,
        email: email
    })
    
    if (user) {
    res.status(200).json({
        message: "You are Signed Up!"
    })
} else {
    res.status(403).json({
        message: "User is already present"
    })
}
} catch(e) {
    res.status(500).json({
        message: "signup failed"
    });
}


});

userRouter.post("/login", async function(req, res) {
try {
    const requiredBody = z.object({
        email: z.email(),
        password: z.string().min(8).max(8)
    })

    const parsedBody = requiredBody.safeParse(req.body);

    if(!parsedBody.success) {
        res.status(403).json({
            message: "Invalid Credentials",
            error: parsedBody.error
        });
    }

    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: email
    });

    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (passwordMatch && user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_SECRET)
        res.json({
        token: token
    });
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
} catch(e) {
    res.status(500).json({
        message: "signin failed"
    });
}
});

userRouter.get("/purchases", userAuth, async function(req, res) {
    const userID = req.userId;

    const purchasedCourse = await purchaseModel.find({
        userID: userID
    })

    let purchasedCourseId = [];

    for (let i = 0; i < purchasedCourse.length; i++) {
        let id = purchasedCourse[i].courseID
        if (typeof id === "string") {
            id = mongoose.Types.ObjectId(id);
        }
        purchasedCourseId.push(id);
    }

    const courseData = await courseModel.find({
         _id: { $in: purchasedCourseId }
    });

    res.status(200).json({
            purchasedCourse,
            courseData
        });


});

module.exports = {
    userRouter: userRouter
}