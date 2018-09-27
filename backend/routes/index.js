var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/API', function(req, res, next) {
    setTimeout( function(req, res) {
        res.send( 'hello beauty');
    }.bind(null, req, res), 2000);
});

if ( process.env.NODE_ENV === 'production' ) {
  router.use( express.static( path.join( __dirname, '../client/build')));
  router.get('/', function(req, res, next) {
    res.sendFile( path.join(__dirname, '../client/build/index.html'));
  });
}

module.exports = router;
