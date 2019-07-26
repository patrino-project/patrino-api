
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var MotherModel = require('./MotherModel')(app);

app.listen(1234, function() {
  console.log("O servidor está rodando na porta 1234.");
});
