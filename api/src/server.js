
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var MotherModel = require('./models/MotherModel')(app);
var AttendantModel = require('./models/AttendantModel')(app);

app.listen(8080, "10.128.0.3", function() {
  console.log("O servidor 10.128.0.3 está rodando na porta 8080.");

});
