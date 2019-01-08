const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/user');

passport.use(new FacebookStrategy({
        clientID: '267652670480586',
        clientSecret: '1fe8ce7e23b704897cef6de7a19b7c2f5142532d',
        callbackURL: "http://localhost:3001/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate(
            { facebookId: profile.id }, 
            function (err, user) {
                return cb(err, user);
            }
        );
    }
));