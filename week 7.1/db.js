const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    name: String,
    email: { type:String, unique:true },
    password: String
});

const todo = new Schema({
    title: String,
    UserId: ObjectId,
    done: Boolean
});

const userModel = mongoose.model("users", user);
const todoModel = mongoose.model("todos", todo);

module.exports = {
    userModel,
    todoModel
}