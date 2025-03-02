const {Router} = require('express');
const userRouter = Router();

userRouter.post('/signup',(req,res)=>[
    res.json({message:'Signup page'})
])

userRouter.post('/signin',(req,res)=>{
    res.json({message:'Signin page'})
}
 )

 userRouter.get('/purchases',(req,res)=>{
    res.json({message:'Purchases page'})
 })

 module.exports = userRouter;