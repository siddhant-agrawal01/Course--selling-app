const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");

const jwt = require("jsonwebtoken");

const JWT_USER_PASSWORD = 'siddhant'

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstname, lastName } = req.body;

  // Check if email already exists
  const existingUser = await userModel.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  await userModel.create({
    email: email,
    password: password,
    firstname: firstname,
    lastName: lastName,
  });
  res.json({ message: "Signup succeeded" });
});

userRouter.post("/signin", async(req, res) => {

    const{email,password} = req.body;

    const user = await userModel.findOne({email:email,
        password:password,
    });

    if(user)
    {
        const token = jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD)

        res.json({token:token });
    }
  else {
    res.status(403).json({
        message:"incorrect credentials"
    })
  }
});

userRouter.get("/purchases", (req, res) => {
  res.json({ message: "Purchases page" });
});

module.exports = userRouter;
