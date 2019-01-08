const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const User = require('../models/user');

passport.use(new GitHubStrategy({
    clientID: '6539a7feba83a4bde236',
    clientSecret: '1fe8ce7e23b704897cef6de7a19b7c2f5142532d',
    callbackURL: "http://localhost:3000/oauth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOneAndUpdate(
      { githubId: profile.id },
      {
        name: profile.displayName,
        email: profile.emails[0].value,
        photo: profile.photos[0].value
      },
      {upsert: true},
      function (err, user) {
        return cb(err, user);
      }
    );
  }
));