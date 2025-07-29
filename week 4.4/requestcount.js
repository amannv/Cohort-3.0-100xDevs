const express = require("express");
const app = express();

let requestCount = 0;

app.use(function(req, res, next){
    requestCount = requestCount + 1;
    next();
})

app.get("/user", function(req, res){
    res.json({
        name: "Aman"
    });
});

app.get("/user", function(req, res){
    res.json({
        name: "Vishal"
    });
});

app.get("/requestcount", function(req, res){
    res.json({
        requestCount
    });
});

app.listen(3000);