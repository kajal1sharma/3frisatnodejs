const express=require('express');
const Router = express.Router();


Router.get("/registration",(req,res,next)=>{
    res.render("index")
})
Router.post("/registration", (req, res,next)=>{

    res.send(req.body);

})

module.exports=Router;