const express = require('express');
const userRouter = require('./route/user');
const courseRouter = require('./route/course');
const adminRouter = require('./route/admin');
const { connectDB }= require("./db");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use('/admin',adminRouter)

connectDB()
  .then(() => {
    console.log("database connected");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("error in connecting database");
  });
