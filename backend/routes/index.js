var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/API', function(req, res, next) {
    setTimeout( function(req, res) {
        res.send( 'hello beauty');
    }.bind(null, req, res), 2000);
});

if ( process.env.NODE_ENV === 'production' ) {
  console.log('yes i am in production MODE');
  router.use( express.static( path.join( __dirname, '../client/build')));
  router.get('/', function(req, res) {
    console.log('GET request pour mon app react bordelll !');
    res.sendFile( path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = router;
