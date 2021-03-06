// Require mysql
var mysql = require("mysql");

// for local testing
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "virtuous_circle_db"
});

// for Heroku
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  // console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
