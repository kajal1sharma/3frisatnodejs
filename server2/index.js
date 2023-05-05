const express = require('express');
const http= require('http');
const app = express();


app.use('/products',(req, res,next)=>{
    res.status(200).send("<html><head></head><body><h1>List Of Products</h1><form method='POST' action='/setProductInfo'><input type='text'/><input type='submit'></form></body></html>");
})
app.post('/setProductInfo',(req, res,next)=>{
    res.send("hi the req is server")
})
app.use('/',(req, res,next)=>{
    res.status(200).send("<html><head></head><body><h1>Error</h1></body></html>");
})
app.use((req, res, next)=>{
    console.log(req.url);
    next();
})
app.use((req, res, next)=>{
    console.log("iam middleware number 2");
})


// const server= http.createServer(app);
// server.listen(4000, ()=>{
//     console.log("this is the second way to start our server");
// })

app.listen(4000,()=>{
    console.log("server is started");
});