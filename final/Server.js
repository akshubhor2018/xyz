const express=require("express");
const app=express();
 const path=require("path");


app.get("/",function(req,resp){
resp.sendFile(path.join(__dirname,"public/hell.html"))

});
app.listen(3000);
console.log("server run 3000")