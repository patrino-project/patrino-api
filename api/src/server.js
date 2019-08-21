
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var MotherModel = require('./models/MotherModel')(app);
var AttendantModel = require('./models/AttendantModel')(app);
var RequestModel = require("./models/RequestModel")(app);
var BottlesModel = require("./models/BottlesModel")(app);

app.listen(8080, "10.128.0.3", function() {
//app.listen(3000, function() {
  console.log("O servidor 10.128.0.3 está rodando na porta 8080.");

});
