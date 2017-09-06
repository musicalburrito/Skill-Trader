/**
 * Created by nancyli on 8/16/17.
 */
'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:27017/test2';
var Username = require('./server/models/item');
var Lsting = require('./server/models/listing');

var app = express();
var router = express.Router();
var port = 3000;

mongoose.connect(url , {
    useMongoClient: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, ' +
        'Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

router.route('/un')
    .post(function(req, res) {
        var un = new Username();
        un.username = req.body.username;
        un.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'db has been updated'});
    })
});

router.route('/listings')
    .post(function(req, res){
        var aListing = new Lsting();
        aListing.title = req.body.title;
        aListing.username = req.body.username;
        aListing.description = req.body.description;
        aListing.save(function (err) {
            if(err)
                res.send(err);
            res.json({message: 'db has been updated'});
        })
    });



app.listen(port, function() {
    console.log('api running on port ${port}');
});
