const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovekajal"
const app = express();
app.use(express.json());

const users = [];



app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up"
    });

    console.log(users);

});


app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        // foundUser.token = token;
        res.json({
            message: "You are signed in",
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        })
    }

    console.log(users);

});

app.get("/me", function(req, res) {
    const token = req.headers.authorization;
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;
    let foundUser = null;    
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            foundUser = users[i];
        }
    }
    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        res.json({
            message: "user not found"
        });
    }

});


app.listen(3000, () => {
    console.log("Server is running at port 3000");
});