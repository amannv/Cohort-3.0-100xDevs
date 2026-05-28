import express from "express"
const app = express();

app.get("/signup", (req, res) => {
    res.send("Hi there from signup");
})

app.get("/signin", (req, res) => {
    res.send("Hi there from signin");
})

app.get("/chat", (req, res) => {
    res.send("Hi there");
})

app.listen(3001, () => {
    console.log("Hey there server is started")
})