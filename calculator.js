//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Sum Calculator
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  //console.log(req.body.num1);
  res.send("The sum of "+ num1 + " and " + num2 + " is " + result);
});

//BMI Calculator

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var result = weight / (height * height);

  res.send("The Result is " + result);
});



app.listen(3000, function(){
  console.log('server is running on port http://localhost:3000/');
});
