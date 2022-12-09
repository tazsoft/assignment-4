const express=require('express');
const app=express();
// header properties---->
app.post('/',function(req,res){
    var userName=req.header("userName");
    var password=req.header("password");
    res.send("userName is: "+userName +"\n password is: "+password );
})
// body properties----->
app.post('/',function(req,res){
    var firstName=req.query.firstName;
    var lastName=req.query.lastName;
    res.send("full name is: "+firstName+" "+lastName );
})
app.listen(5533,function(){
    console.log("successfully run this program");
})