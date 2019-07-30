var ConnectionFactory = require("./ConnectionFactory.js");

/*Obtendo os usuários cadastrados no database*/
module.exports = function(app) {
  /*Realizando login na aplicação*/
  app.post("/attendants/login/", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var connection = ConnectionFactory.getConnection();

    connection.connect(function(err) {
      if (err) throw err;
      var sql = "SELECT * FROM attendants WHERE email='" + email + "' AND password='" + password + "'";
      connection.query(sql, function (err, result) {
        if (err) throw err;

        if(result.length > 0) {
          console.log("Atendente autenticado!");

          res.send(JSON.stringify({"message": "OK", "code": result[0].code }));
        } else {
          console.log("Atendente não autenticado!");

          res.send(JSON.stringify({"message": "ERROR"}));
        }
      });
    });

  });


  /*Criando um novo usuário*/
/*  app.post('/mothers/', function(req, res) {
      var name = req.body.name;
      var email = req.body.email;
      var password = req.body.password;
      var phone = req.body.phone;
      var address = req.body.address;
      var createdAt = new Date().toLocaleDateString();
      var modifiedAt = new Date().toLocaleDateString();

      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO mothers(name, email, password, phone, address) VALUES('" + name + "', '" + email + "', '" + password + "', '" + phone + "', '" + address + "')";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Usuário inserido com sucesso!");

          res.send(JSON.stringify({"message": "OK"}));
        });
      });

  });


*/
  /*Atualizando usuário*/
/*  app.put('/mothers/', function(req, res) {
      var code = req.body.code;
      var name = req.body.name;
      var email = req.body.email;
      var password = req.body.password;
      var phone = req.body.phone;
      var address = req.body.address;
      var createdAt = new Date().toLocaleDateString();
      var modifiedAt = new Date().toLocaleDateString();

      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE mothers SET name='" + name + "', password='" + password + "', phone='" + phone + "', address='" + address + "' WHERE email='" + email + "'";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Usuário atualizado com sucesso!");

          res.send(JSON.stringify({"message": "OK"}));
        });
      });

  });*/

}
