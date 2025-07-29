const express = require("express");
const app = express();

app.get("/add", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    function add(a, b) {
        return a + b;
    }
    const result = add(a, b);
    console.log(result);
    res.send("the addition of a and b is " + result);
});

app.get("/subtract", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    function subtract(a, b) {
        return a - b;
    }
    const result = subtract(a, b);
    console.log(result);
    res.send("the subtraction of a and b is " + result);
});

app.get("/multiply", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    function multiply(a, b) {
        return a * b;
    }
    const result = multiply(a, b);
    console.log(result);
    res.send("the multiply of a and b is " + result);
});

app.get("/divide", function (req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    function divide(a, b) {
        return a / b;
    }
    const result = divide(a, b);
    console.log(result);
    res.send("the division of a and b is " + result);
});



app.listen(3000, () => {
    console.log("the server is running on port 3000");
});
