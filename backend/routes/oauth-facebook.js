const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');

router.get('/facebook',
    passport.authenticate('facebook')
);

router.get('/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect: '/foirax' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/result');
    }
);

module.exports = router;
