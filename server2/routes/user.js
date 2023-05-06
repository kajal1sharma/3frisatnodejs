const express = require('express');

const router= express.Router();


router.get("/info",(req,res,next)=>{
    res.json({username:"neena", age:"24", mobile:"12323434324", salary:"20000"})
})

module.exports=router;
