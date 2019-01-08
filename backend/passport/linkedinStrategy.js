const passport = require('passport');
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;

const User = require('../models/user');

passport.use(new LinkedinStrategy({
    clientID: '77w8w30hklxasb',
    clientSecret: 'AZSmsmU7qfTImI9L',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
  }, function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's LinkedIn profile is returned to
      // represent the logged-in user. In a typical application, you would want
      // to associate the LinkedIn account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
}));