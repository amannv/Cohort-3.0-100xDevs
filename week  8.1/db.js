const mongoose = require("mongoose");
console.log("Connected to Mongo");
async function mongoConnect() {
await mongoose.connect(process.env.DB);
}
mongoConnect();
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const user = new Schema ({
    email: { type: String, unique:true},
    password: String,
    firstName: String,
    lastName: String
});

const admin = new Schema ({
    email: { type: String, unique:true},
    password: String,
    first_name: String,
    last_name: String
});

const course = new Schema ({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorID: ObjectID
});

const purchases = new Schema ({
     courseid: ObjectID,
     userID: ObjectID
});

const userModel = mongoose.model("users", user);
const adminModel = mongoose.model("admin", admin);
const purchaseModel = mongoose.model("userpurchases", purchases);
const courseModel = mongoose.model("courses", course);

module.exports = {
    userModel,
    adminModel,
    purchaseModel,
    courseModel
}