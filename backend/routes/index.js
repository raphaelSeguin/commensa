var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/API', function(req, res, next) {
    setTimeout( function(req, res) {
        res.send( 'hello beauty');
    }.bind(null, req, res), 2000);
});

router.get('/check', function(req,res) {
    res.sendFile( path.join(__dirname, '../../client/coucou' ));
});

module.exports = router;
