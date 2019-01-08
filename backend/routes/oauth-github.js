var express = require('express');
var path = require('path');
var router = express.Router();
const passport = require('passport');

router.get('/github', 
    passport.authenticate('github')
);
router.get('/github/callback', 
    passport.authenticate('github', {failureRedirect: '/failuuuure'}),
    function(req, res) {
        res.redirect('welcome');
    }
)

module.exports = router;