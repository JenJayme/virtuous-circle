//The model is an object like a class with functions defined to create, read, update & delete

// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

//create an object that represents the basic unit, with create, read, update & delete functions that will interact with the connection.query functions defined in the ORM
var foodcircle = {
    all: function (cb) {
        console.log("Accessing foodcircle model...", orm);
        orm.selectAll('foodbundles', function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.insertOne('foodbundles', cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        console.log("Accessing update function in foodcircle model...");
        orm.updateOne('foodbundles', objColVals, condition, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.deleteOne('foodbundles', condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (controller.js).
module.exports = foodcircle;