const{Router} = require('express');
const courseRouter = Router();

courseRouter.post('/purchase',(req,res)=>{
    res.json({message:'purachase page'})
})

courseRouter.get('/preview',(req,res)=>{
    res.json({message:'courses preview'})
})

module.exports = courseRouter;