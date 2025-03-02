const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://siddhant:database@cluster0.p5jvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/courseDB`
  );
};

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  LastName: String,
});
const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageURL: String,
  createrId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
const purchaseSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // ✅ Correct
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "course" }, // ✅ Correct
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
  connectDB,
};
