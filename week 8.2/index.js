const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./Routes/user");
const { courseRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");

const app = express();
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT;
const DB = process.env.DB;


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);


async function main() {
await mongoose.connect(DB);
app.listen(PORT, function() {
    console.log("Server is running on port " + PORT );
});
}

main();