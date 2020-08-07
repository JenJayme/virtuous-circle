// The ORM has all of the connection.queries, defined generically with placeholders for table names, fields & values

var connection = require('./connection');
const { query } = require('express');

var orm = {
    selectAll: function selectAll(table, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            cb(results);
        });
    },

    insertOne: function insertOne(table, fields, values, cb) {
        console.log("==============ORM.JS===================")
        console.log("Accessing insertOne function in ORM...");
        console.log("=================================")
        console.log(fields, values);
        console.log("=================================")

        var cols = fields.toString();

        var queryString = `INSERT INTO ${table} (${cols}) VALUES (`;

        for (let i = 0; i < values.length; i++) {
           if (i < values.length - 1) {
             queryString += "'" + values[i] + "',";
           } else {
             queryString += "'" + values[i] + "'";
           }
        }

        queryString += ')';

        // INSERT INTO table_name (column1, column2, column3, ...)
        // VALUES (value1, value2, value3, ...);

        // var queryString = 'INSERT INTO '+ table;
        // queryString += ' (';
        // queryString += fields.toString();
        // queryString += ') VALUES ?;';        
        // console.log('queryString = '+queryString);

        connection.query(queryString, function(err, results) {
            if (err) throw err;

            cb(results);
        });
    },

    updateOne: function updateOne(table, updateFieldValObj, condition, cb) {
        var updateFieldValSQL = objToSql(updateFieldValObj);

        var queryString= `UPDATE ${table} SET ${updateFieldValSQL} WHERE ${condition}`;
        console.log('queryString =' + queryString);
        connection.query(queryString, function (err, results) {
            if (err) { 
                throw err
            }
            cb(results);
        });
    },

    deleteOne: function deleteOne(table, condition, cb) {
        var queryString= `DELETE ${table} WHERE ${condition}`;
        console.log(queryString);

        connection.query(queryString, function (err, results) {
            if (err) {
                throw err
            }
            cb(results);
        });
    }
};


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
