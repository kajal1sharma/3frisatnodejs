const express=require('express');
const Router = express.Router();
const userDb = require('../models/userSchema');

Router.get("/registration",(req,res,next)=>{
    res.render("index")
})
Router.post("/registration", (req, res,next)=>{

    //res.send(req.body);
    const obj=new userDb({
        username:req.body.username,
        password:req.body.password
    });
    obj.save()

    res.send("uploading data");
})

Router.get('/info', async (req, res, next)=>{
   let result = await userDb.find();
//    res.send(result);
     res.render('taskList',{result:result})
   
})


module.exports=Router;