//The controller defines api routes for get, post, put & delete

var express = require('express');
var router = express.Router();

//Import the model to use its database functions
// var model = require('../models/foodcircle.js');
const foodcircle = require('../models/foodcircle');
const { end } = require('../config/connection.js');
const orm = require('../config/orm');

//Create all routes with logic as needed
router.get('/', function (req, res) {
    // console.log("Processing GET request on controller...", res);
    foodcircle.all(function (data) {
        var hbsObject = {
            foodbundles: data
        };
        console.log('Data: '+ JSON.stringify(data));
        res.render('index', hbsObject);
    });
});

router.post('/api/foodcircle/', function (req, res) {
    console.log("Processing POST request on controller");

    foodcircle.create([
        'bundle_name', 'quantity','claimed'
    ], [
        req.body.bundle_name, req.body.quantity, req.body.claimed
    ], function(result) {
        res.json({ id: result.insertId });
        console.log("Processing POST request on controller...", result);
    });
});

router.put('/api/foodcircle/:id', function (req, res) {
    console.log("Accessing controller.js PUT functio...")
    var condition = 'id = ' + req.params.id;

    console.log('condition: ', condition);

    foodcircle.update({
        claimed: req.body.claimed
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/foodcircle/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    foodcircle.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export routes for server.js to use.
module.exports = router;
