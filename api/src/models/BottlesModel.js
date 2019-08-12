var ConnectionFactory = require("./ConnectionFactory.js");

/*Obtendo os usuários cadastrados no database*/
module.exports = function(app) {
  /*Criando um novo frasco*/
  app.post('/bottles/', function(req, res) {
      var mother = req.body.mother;
      var createdAt = new Date().toLocaleDateString();
      var modifiedAt = new Date().toLocaleDateString();

      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO bottles(mother) VALUES(" + mother + ")";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Frasco criada com sucesso!");

          res.send(JSON.stringify({"message": "OK"}));
        });
      });

  });

}
