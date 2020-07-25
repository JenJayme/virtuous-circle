var connection = require('./connection.js');

var orm = {
    selectAll: function selectAll(table) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err, results) {
            if (err) throw err;
            console.table(results);
        });
    },

    insertOne: function insertOne(table, fields, values) {
        var queryString = 'INSERT INTO '+ table;
        queryString += ' (';
        queryString += fields.toString();
        queryString += ') VALUES ?;';        
        console.log('queryString = '+queryString);

        connection.query(queryString, [table, fields, values], function(err, results) {
            if (err) throw err;
            console.log(results);
        });
    },
    


}


//=============================================================

//BORROWED FOR REFERENCE - delete

var connection = require("./connection.js");
const { query } = require('express');

var orm = {
  select: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT ?? FROM ?? AS tOne";
    queryString += " LEFT JOIN ?? AS tTwo";
    queryString += " ON tOne.?? = tTwo.??";

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
