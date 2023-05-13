const express = require('express');

const productRouter = require('./routes/product')
const userRouter =require("./routes/user");
const bodyParser =require('body-parser');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views','views')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')));


app.use("/product",productRouter);
app.use("/user",userRouter);
// app.use("/", function (req,res,next){
//     //res.send("hello welcome to this site")
//         next();
// })

app.use("/" ,function always(req, res,next){
    console.log("hello iam working");
    res.status(400).send("<h1>Page Not Found</h1>")
})




app.listen(4000);

