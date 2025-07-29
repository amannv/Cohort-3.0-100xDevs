const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next){
   const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.json({
        msg: "sorry you are not of age yet"
        });
    }
}

// function isOldEnough(age) {
//     if (age >= 14) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
        res.json({
            msg: "You are riding Ride1"
        });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
        res.json({
            msg: "You are riding Ride2"
        });
});


app.listen(6000);