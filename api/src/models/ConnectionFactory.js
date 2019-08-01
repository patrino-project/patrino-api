var mysql = require('mysql');

module.exports.getConnection = function() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "patrino",
    database: "patrinodb"
  });

  return connection;
}
