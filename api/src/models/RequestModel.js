var ConnectionFactory = require("./ConnectionFactory.js");

/*Obtendo os usuários cadastrados no database*/
module.exports = function(app) {
  /*Criando uma nova requisição*/
  app.post('/requests/', function(req, res) {
      var mother = req.body.mother;
      var status = req.body.status;
      var createdAt = new Date().toLocaleDateString();
      var modifiedAt = new Date().toLocaleDateString();

      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO requests(mother, status) VALUES(" + mother + ", " + status + ")";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Requisição criada com sucesso!");

          res.send(JSON.stringify({"message": "OK"}));
        });
      });

  });

  /*Atualizando status da solicitação*/
  app.post('/requests/', function(req, res) {
      var mother = req.body.mother;
      var status = req.body.status;
      var note = req.body.note;

      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE requests SET note='" + note + "' AND  status=" + status + " WHERE mother=" + mother;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Solicitação atulizada com sucesso!");

          res.send(JSON.stringify({"message": "OK"}));
        });
      });

  });

}
