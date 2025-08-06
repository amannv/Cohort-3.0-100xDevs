const express = require("express")
const bcrypt = require("bcrypt");
const { z } = require("zod");
require("dotenv").config();


const adminRouter = express.Router();
const { adminModel, courseModel } = require("../db");
const { jwt ,JWT_ADMIN_SECRET ,adminAuth } = require("../Auth/adminauth");



adminRouter.post("/signup", async function (req, res) {
    try {  

    const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(8).max(8),
            firstName: z.string().min(3).max(8),
            lastName: z.string().min(3).max(8),
         });
        
    const parsedBody = requiredBody.safeParse(req.body);
            
    if (!parsedBody.success) {
        return res.status(400).json({
            message: "Data is not valid",
            error: parsedBody.error
        });
    }

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 5);

    const admin = await adminModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    });

    if (admin) {
        return res.status(200).json({
            message: "You are signed up as admin"
        })
    } 
    } catch(e) {
       return res.status(500).json({
            message: "Error while signing up"
        })
    }
});

adminRouter.post("/signin", async function (req, res) {
    try {
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(8)
    })

    const parsedBody = requiredBody.safeParse(req.body);

    if(!parsedBody.success) {
       return res.status(403).json({
            message: "Invalid Credentials",
            error: parsedBody.error
        });
    }

    const email = req.body.email;
    const password = req.body.password;

    const admin = await adminModel.findOne({
        email: email
    });

    const passwordMatch = await bcrypt.compare(password, admin.password);
    
    if (passwordMatch && admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_SECRET)
        return res.json({
        token: token
    });
    } else {
       return res.status(403).json({
            message: "Invalid Credentials"
        })
    }
} catch(e) {
   return res.status(500).json({
        message: "signin failed"
    });
}

});


adminRouter.post("/createcourse", adminAuth, async function (req, res) {
  const adminId = req.adminId;

  const { title, description, imageURL, price } = req.body;

  const course = await courseModel.create({
        title,
        description,
        imageURL,
        price,
        creatorID: adminId
    });

    if (course) {
        return res.status(200).json({
            message: "Course created",
            courseId: course._id
        });
    } 
});

adminRouter.put("/courseupdate", adminAuth, async function (req, res) {
    const adminId = req.adminId;

    const { title, description, imageURL, price, courseId } = req.body;

    const updateCourse = await courseModel.findOne({
        creatorID: adminId,
        _id: courseId
    })

    if (updateCourse) {
        await courseModel.updateOne({
            title,
            description,
            imageURL,
            price
        });
        return res.status(200).json({
        message: "Course updated!",
        courseId: courseId
    });
    } else {
        return res.json({
           message: "Course not found"
        });
    }
});

adminRouter.get("/courses/all", adminAuth, async function (req, res) {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorID: adminId
    });

    if (courses) {
       return res.status(200).json({
            courses
        });
    } else {
       return req.json({
        message: "There are no courses"
       });
    }
});

module.exports = {
    adminRouter: adminRouter
}