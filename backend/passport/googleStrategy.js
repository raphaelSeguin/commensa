const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: '1045785232085-mi5vubq6tc6nv6tld974r1kdglfce016.apps.googleusercontent.com',
    clientSecret: 'TGp_B1B1tUKlE1kDl1VytVlP',
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));