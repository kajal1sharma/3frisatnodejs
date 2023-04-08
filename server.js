var http=require('http');

let server=http.createServer((req, res)=>{
    res.write("hi iam new server");
    res.end();
})


server.listen(4000,"127.0.0.1",()=>{
    console.log("server has started")
});