var  express = require("express")
var bodyParser = require("body-parser"); // parse the request
var app = express()

var cal_logic = require("./shapes/cal_logic")

app.use(express.static("public"))
//Parse the request using body-parser middleware
app.use(bodyParser.urlencoded({extended:true})) // parse the urlencoded format
app.use(bodyParser.json()) //parse the json data

app.post("/calculator",function(req,res){
    var data = req.body
    console.log(data)
    switch (data.choice) {
        case "add": var result = cal_logic.add(parseInt(data.num1),parseInt(data.num2))
                    res.send("Addition is  : "+result)
                   
                    break;
        case "sub": var result = cal_logic.sub(parseInt(data.num1),parseInt(data.num2))
                    res.send("Diffrence is  : "+result)
                    break; 
        case "mul": var result = cal_logic.mul(parseInt(data.num1),parseInt(data.num2))
                    res.send("Multiplication is  : "+result)
                    break; 
        case "div": var result = cal_logic.div(parseInt(data.num1),parseInt(data.num2))
                    res.send("Division is  : "+result)
                    break;         
        default: res.send("Wrong choice")
            break;
    }
})

app.get("/traingleperimeter",function(req,res){
    var data = req.query;
    console.log(data)
    var result = parseInt(data.side1) + parseInt(data.side2) + parseInt(data.side3);
    res.send("Perimeter is "+result)
})




app.listen(8000,function(){
    console.log("Server running at 8000")
})