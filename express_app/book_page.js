var express = require("express");
var app = express()

//app.use() is used to add middleware
app.use(express.static("public")) //from here we are serving all static files

app.get("/book",function(req,res){
    res.redirect("./Book_Page.html")
    
})

app.listen(8000,function(){
    console.log("Server running at 8000")
})