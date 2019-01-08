const passport = require('passport');
const User = require('../models/user');

passport.serializeUser( function(user, done) {
    done(null, user._id);
});
passport.deserializeUser( function(userId, done) {
    User.findById(userId, done);
});

require('./facebookStrategy');
require('./linkedinStrategy');
require('./googleStrategy');
require('./githubStrategy');

