var  express = require("express")
var bodyParser = require("body-parser"); // parse the request
var app = express()

var calc = require("./shapes/calculator")

app.use(express.static("public"))
//Parse the request using body-parser middleware
app.use(bodyParser.urlencoded({extended:true})) // parse the urlencoded format
app.use(bodyParser.json()) //parse the json data

app.post("/calcCalculator",function(req,res){
    var data = req.body
    console.log(data)
    switch (data.choice) {
        case "add": var result = calc.calcAdd(parseInt(data.num1),parseInt(data.num2))
                    res.send("add is  : "+result)
                    break;
        case "sub": var result = calc.calcSub(parseInt(data.num1),parseInt(data.num2))
                    res.send("sub is :"+result)
                    break;   
        case "mul": var result = calc.calcMul(parseInt(data.num1),parseInt(data.num2))
                    res.send("mul is  : "+result)
                    break;
        case "div": var result = calc.calcDiv(parseInt(data.num1),parseInt(data.num2))
                    res.send("div is :"+result)
                    break;   
    }
})


app.listen(8000,function(){
    console.log("Server running at 8000")
})