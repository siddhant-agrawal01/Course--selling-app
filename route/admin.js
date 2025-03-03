const { Router } = require("express");
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
 
const adminRouter = Router();
const JWT_ADMIN_PASSWORD = "agrawal";

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastName } = req.body;

  // Check if email already exists
  const existingUser = await adminModel.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  await adminModel.create({
    email: email,
    password: password,
    firstname: firstname,
    lastName: lastName,
  });
  res.json({ message: "Signup succeeded" });
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await adminModel.findOne({ email: email, password: password });

  if (user) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({ token: token });
  } else {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }
});

adminRouter.get("/course", (req, res) => {
  res.json({ message: "create course page" });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({ message: "create course page" });
});

adminRouter.post("/Course", (req, res) => {
  res.json({ message: "create course page" });
});

adminRouter.put("/course", (req, res) => {
  res.json({ message: "create course page" });
});

module.exports = adminRouter;
