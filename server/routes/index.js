var express = require('express');
var router = express.Router();
var fs =require('fs');
/* GET home page. */

router.get("/",(req, res, next)=>{

  let data= "something from database"
  res.render('index',{heading: data});
})


//root route
// router.get("/",doSomething);
// router.get("/about",about);
// router.get("/contact",contact);
// router.get("/about/message",(req,res,next )=>{
//   //res.send("another example of routing")
//   //logic
// next();
// })
// router.get("/about/message",(req,res,next )=>{
//   res.send("another example of routing")

// })
// router.get("/message",function(req, res,next){
//     res.send("hi iam message from anpnymous fucntion")
// })

function contact(req, res, next){
  console.log(req);
  res.write("<html>")
  res.write("<head><title>Restaurant</title></head>")
  res.write("<body>")
  res.write("<h1>Contact Page<h1>");
  res.write("<h2>hi iam working again</h2>");
  res.write("<p>this is contact page of restaurant<p>")
  res.write("</body></html>")
  res.send();
}

function about(req, res, next){
  console.log(req);
  res.write("<html>")
  res.write("<head><title>Restaurant</title></head>")
  res.write("<body>")
  res.write("<h1>About Page<h1>");
  res.write("<h2>hi iam working again</h2>");
  res.write("<p>this is restaurant page<p>")
  res.write("</body></html>")
  res.send();
}

function doSomething(req, res, next){
  console.log(req);
  res.write("<html>")
  res.write("<head><title>Restaurant</title></head>")
  res.write("<body>")
  res.write("<h1>hi now iam working<h1>");
  res.write("<h2>hi iam working again</h2>");
  res.write("<p>this is restaurant page<p>")
  res.write("</body></html>")
  res.send();
}

module.exports = router;
