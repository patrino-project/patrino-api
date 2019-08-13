var ConnectionFactory = require("./ConnectionFactory.js");

/*Obtendo os usuários cadastrados no database*/
module.exports = function(app) {
  /*Criando um novo frasco*/
  app.post('/bottles/', function(req, res) {
      var mother = req.body.mother;
      var createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

      var data = new Date();

	data.setDate(data.getDate() + 15);

	var deadline = new Date(data).toISOString().slice(0, 19).replace('T', ' ');


      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
var sql = "INSERT INTO bottles(mother, createdAt, deadline) VALUES(" + mother + ", '" + createdAt + "', '" + deadline + "')";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Frasco criada com sucesso!");

          res.send(JSON.stringify({"message": "OK"}));
        });
      });

  });

  /*Criando um novo frasco*/
  app.get('/bottles/:code', function(req, res) {
      var code = req.params.code;

      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "select * from bottles inner join mothers where mothers.code = bottles.mother and bottles.code = " + code;
        connection.query(sql, function (err, result) {
          if (err) throw err;

          res.send(JSON.stringify(result));
        });
      });

  });

  /*Criando um novo frasco*/
  app.get('/bottles/', function(req, res) {

      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "select bottles.*, mothers.name, mothers.address, mothers.phone, mothers.email  from bottles inner join mothers where mothers.code = bottles.mother";
        connection.query(sql, function (err, result) {
          if (err) throw err;

          res.send(JSON.stringify(result));
        });
      });

  });


}
