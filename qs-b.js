var express=require('express');
var multer = require('multer');
var app=express();

var storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./upload');
    },
    filename:function(req,file,callback){
        callback(null,file.originalname);
    }
})


// Multer File Type Validation
let upload = multer({
    storage:storage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           // upload only png nad jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
    }).single('uploadfile');

app.post('/',function(req,res){
upload(req,res,function(error){
    if(error){
         res.end("upload fail");
    }else{
        res.end("upload success");
    }
})
})

app.listen(5534,function(){
    console.log('success')
})










