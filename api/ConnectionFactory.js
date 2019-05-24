var mysql = require('mysql');

module.exports = class ConnectionFactory {
    /*Criando conexão com o database*/
    open() {
        var connection = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "eduardo",
          database: "patrinodb"
        });

        connection.connect(function(err) {
          if (err) throw err;
          console.log("Você criou uma nova conexão com o banco de dados.");
          return connection
        });
    }

    read() {
        var connection = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "eduardo",
          database: "patrinodb"
        });

        connection.connect(function(err) {
          if (err) throw err;
          var sql = "SELECT * FROM users";
          connection.query(sql, function (err, result) {
            if (err) throw err;
            return result;
          });
        });
    }
}
