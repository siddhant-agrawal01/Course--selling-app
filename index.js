const express = require('express');
const userRouter = require('./route/user');
const courseRouter = require('./route/course');
const adminRouter = require('./route/admin');

const app = express();

app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use('/admin',adminRouter)

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})