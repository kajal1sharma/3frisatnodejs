const express = require('express');
const path =require('path')
const router= express.Router();


router.get("/info",(req,res,next)=>{
    res.json({username:"neena", age:"24", mobile:"9323434324", salary:"50000"})
})

router.get("/form",(req, res, next)=>{
    res.sendFile(path.join(__dirname,"..","views","useInfo.html"))
})

module.exports=router;
