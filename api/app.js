
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var ConnectionFactory = require("./ConnectionFactory.js");

var app = express();

app.use(bodyParser.json());

/*Obtendo os usuários cadastrados no database*/
app.get('/users/', function(req, res) {
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "mysql",
      database: "patrinodb"
    });

    connection.connect(function(err) {
      if (err) throw err;
      var sql = "SELECT * FROM mothers";
      connection.query(sql, function (err, result, fields) {
        if (err) throw err;

        var users = [];
        for (var i = 0;i < result.length; i++) {
            users.push({
                "code": result[i].code,
                "name": result[i].name,
                "email": result[i].email,
                "password": result[i].password,
                "telefone": result[i].telefone,
                "endereco": result[i].endereco
            });
        }

        console.log(users);

        res.send(JSON.stringify(users));
      });
    });

});


/*Criando um novo usuário*/
app.post('/users/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var telefone = req.body.telefone;
    var endereco = req.body.endereco;
    var createdAt = new Date().toLocaleDateString();
    var modifiedAt = new Date().toLocaleDateString();

    console.log(name);

    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "mysql",
      database: "patrinodb"
    });

    connection.connect(function(err) {
      if (err) throw err;
      var sql = "INSERT INTO mothers(name, email, password, telefone, endereco) VALUES('" + name + "', '" + email + "', '" + password + "', '" + telefone + "', '" + endereco + "')";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Usuário inserido com sucesso!");

        res.send("OK");
      });
    });

});

app.listen(1234, function() {
  console.log("O servidor está rodando na porta 8000.");
});
