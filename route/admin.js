const{Router } = require('express')

const adminRouter = Router();

adminRouter.post('/signup',(req,res)=>[
    res.json({message:'Signup page'})
])

adminRouter.post('/signin',(req,res)=>{
    res.json({message:'Signin page'})
}
 )

 adminRouter.get('/course',(req,res)=>{
    res.json({message:'create course page'})
 })

 adminRouter.get('/course/bulk',(req,res)=>{
    res.json({message:'create course page'})
 })

 adminRouter.post('/Course',(req,res)=>{
    res.json({message:'create course page'})
 })

 adminRouter.put('/course',(req,res)=>{
    res.json({message:'create course page'})
 })



module.exports = adminRouter