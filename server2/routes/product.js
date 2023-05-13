const express =require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

router.get("/productlist",async (req,res,next)=>{

    const options = {
        method: 'GET',
        url: 'https://the-mexican-food-db.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': '372e1be677mshb27e20e9a8d6ffbp116237jsn3d8a3869bb79',
          'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
    // res.json([{"title":"book",cost:230},{"title":"bottle", cost:50},{"title":"bottle", cost:50},
    // {"title":"bottle1", cost:50},
    // {"title":"bottle2", cost:50},
    // {"title":"bottle3", cost:50},
    // {"title":"bottle4", cost:50}]);
    

})

module.exports=router;

// router.get("/productlist", function(req, res, next){
//     res.json({list:["tshirt", "trousers", "tops"]})

// })
// router.get("/product", function (req,res,next){
//     res.send("<h1>hello this is a product page<h1>")
// })

// router.get("/userDetail", function(req, res, next){

//     // console.log(path.join(__dirname,"..","views","useInfo.html"));
//     res.sendFile(path.join(__dirname,"..","views","useInfo.html"))
//     // res.sendFile(path.join(__dirname,));
//     // res.send("<html><head></head><body><form action='/handleData' method='post'> <input placeholder='enter your name' name='username'><input placeholder='enter your password' name='password'><input type='submit'></form></body></html>")

// })

// router.post("/handleData",function(req, res, next){
//     const data=req.body;
//     res.send(data);
// })


