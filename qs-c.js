const express= require('express');
const app=express();
// download--->
app.get("/download",function(req,res){
    res.download("./upload/image.jpg")
})
app.listen(5535,function(){
    console.log("run success")
})