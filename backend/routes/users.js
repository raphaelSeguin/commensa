var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.send('i am a user, duh!');
});

module.exports = router;
