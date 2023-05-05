const express = require('express');
const productRouter = require('./routes/product')
const bodyParser =require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use("/",productRouter);

// app.use("/", function (req,res,next){
//     //res.send("hello welcome to this site")
//         next();
// })

app.use("/" ,function always(req, res,next){
    console.log("hello iam working");
    res.status(400).send("<h1>Page Not Found</h1>")
})




app.listen(4000);

