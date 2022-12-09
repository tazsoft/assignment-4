const express=require('express');
const { diskStorage } = require('multer');
var multer=require('multer');

var app=express();

var storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./uploas')
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

// var upload=({storage:storage}).single('myfile')
var upload=multer({storage:storage}).single('fliename');


app.post('/',function(req,res){
    upload(req,res,function(error){
        if(error){
res.send("fail")
        }else{
res.send("success")
        }
    })
})
app.listen(5503,function(){
    console.log("success")
})