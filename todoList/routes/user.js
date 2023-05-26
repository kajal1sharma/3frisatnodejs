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

Router.post("/login",function(req, res, next){
    let username=req.body.username;
    let password =req.body.password;
  console.log(username, password)
    userDb.findOne({username,password})
    .then(data=>{
        console.log(data)
        res.cookie({userid:data._id})
        res.send(data);
    })
    .catch(err=>{
        console.log(err)
    })


})

Router.get('/info', async (req, res, next)=>{
   let result = await userDb.find();
//    res.send(result);
     res.render('taskList',{result1:result, })
   
})

Router.get("/tasklist",(req, res, next)=>{
    
})
module.exports=Router;