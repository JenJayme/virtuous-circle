//The controller defines api routes for get, post, put & delete

var express = require('express');
var router = express.Router();

//Import the model to use its database functions
var model = require('../models/foodcircle.js');
const foodbundle = require('../models/foodcircle.js');
const { end } = require('../config/connection.js');

//Create all routes with logic as needed
router.get('/', function (req, res) {
    foodbundle.all(function(data) {
        var hbsObject = {
            foodcircle: data
        };
        console.log('hbsObject: '+ hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/foodcircle', function(req, res) {
    foodbundle.create([
        'bundle_name', 'offered'
    ], [
        req.body.name, req.body.offered
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/foodcircle/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition: ', condition);

    foodbundle.update({
        offered: req.body.offered
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/foodcircle/:id', function(req. res) {
    var condition = 'id = ' + req.params.id;

    foodbundle.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export routes for server.js to use.
module.exports = router;
