const express = require("express");
const app = express();
app.use(express.json());


app.post("/signup", function(req, res) {

});

app.post("/signin", function(req, res) {

});

app.post("/Todo", function(req, res) {

});

app.get("/Todos", function(req, res) {

});

app.listen(3000, function() {
     console.log("Server is running on port 3000");
});