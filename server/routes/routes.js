var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Username = require('../models/item');
var Lsting = require('../models/listing');
// var Component = require('../Component.jsx');

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
    .get(function(req, res){
        Lsting.find(function(err, listings){
            if (err)
                res.send(err);
            res.json(listings);
            // res.send(listings);
            // console.log(listings);
        });
        console.log("hello");
    })
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

module.exports = router;