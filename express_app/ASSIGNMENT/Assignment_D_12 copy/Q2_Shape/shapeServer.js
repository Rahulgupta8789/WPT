var  express = require("express")
var bodyParser = require("body-parser"); // parse the request
var app = express()

var circle = require("./shapes/circle")
var rectangle = require("./shapes/rectangle")
var triangle = require("./shapes/triangle")

app.use(express.static("public"))
//Parse the request using body-parser middleware
app.use(bodyParser.urlencoded({extended:true})) // parse the urlencoded format
app.use(bodyParser.json()) //parse the json data

app.post("/calcCircle",function(req,res){
    var data = req.body
    console.log(data)
    switch (data.choice) {
        case "area": var result = circle.calcArea(parseInt(data.radius))
                    res.send("Area is  : "+result)
                    break;
        case "circumference": var result = circle.calcCircumference(parseInt(data.radius))
                    res.send("Circumference is :"+result)
                    break;
        case "diameter": var result = circle.calcDiameter(parseInt(data.radius))
                    res.send("Diameter is :"+result)
                    break;   
        default: res.send("Wrong choice")
            break;
    }
})

app.post("/calcTriangle",function(req,res){
    var data = req.bodyParser;
    console.log(data)
   
    switch (data.choice) {
        case "equilateral": var result = triangle.isEquilateral(parseInt(data.side1),parseInt(data.side2),parseInt(data.side3))
                    res.send("Triangle is  equilateral: "+result)
                    break;
        case "perimeter":  var result = triangle.calcPerimeter(parseInt(data.side1),parseInt(data.side2),parseInt(data.side3))
                    res.send("Perimeter is "+result)
                    break;   
        default: res.send("Wrong choice")
            break;
    }
})

app.post("/calcRectangle",function(req,res){
    var data = req.body
    console.log(data)
    switch (data.choice) {
        case "area": var result = rectangle.calcArea(parseInt(data.length),parseInt(data.breadth))
                    res.send("Area is  : "+result)
                    break;
        case "perimeter": var result =  rectangle.calcPerimeter(parseInt(data.length),parseInt(data.breadth))
                    res.send("Perimeter is :"+result)
                    break;   
        default: res.send("Wrong choice")
            break;
    }
})

app.listen(8000,function(){
    console.log("Server running at 8000")
})