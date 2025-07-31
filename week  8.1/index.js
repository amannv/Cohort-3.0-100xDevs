const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { userRouter } = require("./Routes/user");
const { courseRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");
const app = express();

app.use("api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
await mongoose.connect(process.env.DB);
app.listen(process.env.PORT, function() {
    console.log("Server is running on port " + process.env.PORT );
});
}

main();