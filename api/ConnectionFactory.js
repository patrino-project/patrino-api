var mysql = require('mysql');

module.exports.getConnection = function() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "patrinodb"
  });

  return connection;
}
