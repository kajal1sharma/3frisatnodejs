const express = require('express');
const path =require('path')
const router= express.Router();
const registraion =require('../models/registration');
router.get("/registration",(req, res, next)=>{
    res.render('registration')
})

router.post("/registration",(req, res, next)=>{
    console.log(req);
    console.log(req.body);
    

    let regdb=new registraion(req.body);
    regdb.save();
    res.json(req.body)
    
})

router.get("/info",(req,res,next)=>{
    res.json({username:"neena", age:"24", mobile:"9323434324", salary:"50000"})
})

router.get("/form",(req, res, next)=>{
    res.sendFile(path.join(__dirname,"..","views","useInfo.html"))
})

module.exports=router;
