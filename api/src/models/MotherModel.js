var ConnectionFactory = require("./ConnectionFactory.js");

/*Obtendo os usuários cadastrados no database*/
module.exports = function(app) {
  app.get('/mothers/', function(req, res) {
      var connection = ConnectionFactory.getConnection();

      connection.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * FROM mothers";
        connection.query(sql, function (err, data, fields) {
          if (err) throw err;

          console.log("Listando lista de mães cadastradas no aplicativo.");

          const result = {
            "code": 200,
            "message": "OK",
            "data": data
          }

          res.send(JSON.stringify(result));
        });
      });
  });

  /*Realizando login na aplicação*/
  app.post("/mothers/login/", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var connection = ConnectionFactory.getConnection();

    connection.connect(function(err) {
      if (err) throw err;
      var sql = "SELECT * FROM mothers WHERE email='" + email + "' AND password='" + password + "'";
      connection.query(sql, function (err, result) {
        if (err) throw err;

        if(result.length > 0) {
          console.log("Usuário autenticado!");

          res.send(JSON.stringify({"message": "OK", "code": result[0].code }));
        } else {
          console.log("Usuário não autenticado!");

          res.send(JSON.stringify({"message": "ERROR"}));
        }
      });
    });

  });

  /*Criando um novo usuário*/
  app.post('/mothers/', function(req, res) {
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


  /*Deletando um novo usuário*/
  app.delete('/mothers/', function(req, res) {
    var email = req.body.email;
    
    var connection = ConnectionFactory.getConnection();

    connection.connect(function(err) {
      if (err) throw err;
      var sql = "DELETE FROM mothers WHERE email='" + email + "'";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Usuário deletado com sucesso!");

        res.send(JSON.stringify({"message": "OK"}));
      });
    });

});


  /*Atualizando usuário*/
  app.put('/mothers/', function(req, res) {
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

  });

}
