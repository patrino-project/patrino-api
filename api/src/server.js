
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var MotherModel = require('./models/MotherModel')(app);

app.listen(3000, function() {
  console.log("O servidor localhost está rodando na porta 3000.");

});
