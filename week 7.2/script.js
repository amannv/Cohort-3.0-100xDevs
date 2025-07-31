const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
mongoose.connect("mongodb+srv://amanverma-cmd:Aman%408789@cluster0.vu2sga4.mongodb.net/todo-app-database");
const { userModel, todoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const app = express();
app.use(express.json());
const { z } = require("zod");


app.post("/signup", async function(req, res) {

     const requiredBody = z.object({
        email: z.email(),
        name: z.string().min(3).max(10),
        password: z.string().min(3).max(10).uppercase(1).lowercase(1).includes("@")
    });
    const parsedDatawithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDatawithSuccess.success){
        res.json({
            message: "Data is not Valid",
            error: parsedDatawithSuccess.error
        });
        return
    }
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);
    
    await userModel.create({
        name: name,
        email: email,
        password: hashedPassword
    });
        res.json({
          message: "Error while signing up"
        });
    
    res.json({
        message: "You are signed up successully "
    });

});

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    
   const response = await userModel.findOne({
        email: email
    });

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
            
    } else {
        res.status(403).json({
            message: "Wrong Credentials"
        });
    }

});

app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await todoModel.create({
        UserId: userId,
        title:title,
        done
    });

    res.json({
        message: "Todo created successfully"
    })

});

app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;
    const todos = await todoModel.find({
        UserId: userId
    });
    res.json({
        todos
    });
});

app.listen(3000, function() {
     console.log("Server is running on port 3000");
});