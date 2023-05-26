const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const path= require("path")

const userRoute = require('./routes/user');

const app = express();
//set view engine
app.set("view engine", "ejs");
app.set("views" ,"views");
//body data parsing
app.use(bodyParser.urlencoded({extended:true}))
//static files 
app.use(express.static(path.join(__dirname,"public")))

app.use("/user",userRoute)


app.use("/",function(req,res, next){
    console.log("hello world")
    next();
});
app.use("/",function(req,res, next){
    console.log("hello world 2")
    res.send("response")
})
mongoose.connect("mongodb+srv://ksharma:kajal123@cluster0.3zdw8ht.mongodb.net/?retryWrites=true&w=majority")
.then(data=>{
    console.log("mongoose connected")
    app.listen(4000);
})
.catch(err=>{
    console.log("mongoose not connected",err)
})