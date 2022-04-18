var http = require("http")
var fs = require("fs")
var url=require("url")

var server = http.createServer(function(req,res){
    if(req.url == "/"){
        fs.readFile("./client/calc.html",function(err,data){
            res.write(data.toString())
            res.end()
        })
    }
    if(req.url == "/data"){
        res.write("<h2>This is data endpoint</h2>")
        res.end()
    }
    if(req.url == "/xyz"){
        res.write("This is xyz endpoint")
        res.end()
    }
    if(req.url.startsWith("/add?")){
               //add?num1=20&num2=50
        var data= url.parse(req.url,true).query
       // console.log(data);
       // console.log(data.num1);
         var result=parseInt(data.num1)+parseInt(data.num2)
        res.write("<b>Sum of "+data.num1+" and "+ data.num2 +" is "+result)
        res.end()
         
    }
    if(req.url.startsWith("/subtract?")){
        var data= url.parse(req.url,true).query
        var result=parseInt(data.num1)-parseInt(data.num2)
        res.write("<b>Diff of "+data.num1+" and "+ data.num2 +" is :</b>"+result)
        res.end()         
    }
    
    

    if(req.url.startsWith("/calculate?")){
        //req.url /calculate?num1=10&num2=20
        var url_arr = req.url.split("?") //["/calculate","num1=10&num2=20"]
        var qs = url_arr[1] //qs = num1=10&num2=20
        var data = new URLSearchParams(qs) // parses the querystring then use .get function to get data
        var result = ""
        switch(data.get("operation")){
            case "add" : result = parseInt(data.get("num1")) + parseInt(data.get("num2"))
                        break;
            case "sub" : result = parseInt(data.get("num1")) - parseInt(data.get("num2"))
                        break;
        }
        
        res.write("Result is"+result)
        res.end()
    }

}).listen(8000,function(){
        console.log("Server runnning at 8000")
    })

// server.listen(8000,function(){
//     console.log("Server runnning at 8000")
// })
