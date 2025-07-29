const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovekajal"
const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
    console.log(req.method + " method ");
    next();
}

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/signup", logger, function (req, res) {
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


app.post("/signin", logger, function (req, res) {
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
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        })
    }

    console.log(users);

});


function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    } else {
        res.json({
            message: "You are not logged in"
        });
    }

}


app.get("/me", logger, auth, function(req, res) {
    let foundUser = null;    
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == req.username) {
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


app.get("/todos", auth, function(req, res) {

})

app.post("/createtodo", auth, function(req, res) {

})

app.delete("/deletetodo", auth, function(req, res) {

})


app.listen(3000, () => {
    console.log("Server is running at port 3000");
});