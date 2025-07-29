const express = require('express');
const app = express();

let numberofRequestOfUser = {};
setInterval(() => {
    numberofRequestOfUser = {};
}, 1000)

app.use(function (req, res, next) {
    const userId = req.headers["user-Id"];
    if (numberofRequestOfUser[userId]) {
        numberofRequestOfUser[userId] = numberofRequestOfUser[userId] + 1;
        if (numberofRequestOfUser[userId] > 5) {
            res.status(404).send("No Entry");
        }
        else {
            next();
        }
    }
    else {
        numberofRequestOfUser[userId] = 1;
        next();
    }
});

app.get("/user", function (req, res) {
    res.status(200).json({ name: "Bharat" });
});


app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000);