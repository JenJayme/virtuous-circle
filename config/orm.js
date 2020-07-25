var connection = require('./connection.js');
const { query } = require('express');

var orm = {
    selectAll: function selectAll(table) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err, results) {
            if (err) throw err;
            console.table(results);
        });
    },

    insertOne: function insertOne(table, fields, values, cb) {
        var queryString = 'INSERT INTO '+ table;
        queryString += ' (';
        queryString += fields.toString();
        queryString += ') VALUES ?;';        
        console.log('queryString = '+queryString);

        connection.query(queryString, [table, fields, values], function(err, results) {
            if (err) throw err;

            CB(results);
        });
    },

    updateOne: function updateOne(table, condition, updateFieldValObj, cb) {
        var queryString = 'UPDATE ' + table;
        queryString += ' SET ';
        queryString += objToSql(updateFieldValObj);
        queryString += ' WHERE ';
        queryString += condition;

        console.log('queryString =' + queryString);
        connection.query(queryString, function (err, results) {
            if (err) { 
                throw err
            }
            cb(results);
        });
    }
}


//=============================================================

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

module.exports = orm;
