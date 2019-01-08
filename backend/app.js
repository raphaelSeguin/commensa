const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

// database
const mongoose = require('mongoose');
// use mongo to store sessions
const MongoStore = require('connect-mongo')(session);
// models
const User = require('./models/user');

// passport and strategies
const passport = require('passport');

// routes
const oauthFacebook = require('./routes/oauth-facebook');
const oauthGoogle = require('./routes/oauth-google');
const oauthLinkedin = require('./routes/oauth-linkedin');
const oauthGithub = require('./routes/oauth-github');
const cors = require('./routes/cors');

const production = process.env.NODE_ENV === 'production';

let OAUTH_FACEBOOK_ID = 'azeproaze';

require('./configLoader').spawn(global);

const dbURL = 'mongodb://raph:Raph1979@ds018848.mlab.com:18848/capstone';

// db connection
mongoose.connect(dbURL, { useNewUrlParser: true }).catch( err => console.log(err.message));
const db = mongoose.connection;
db.on('error', err => console.log('db connection error :') );
db.once('open', function() {
    console.log('connected successfully to db');
});

passport.serializeUser( function(user, done) {
    done(null, user._id);
});
passport.deserializeUser( function(userId, done) {
    User.findById(userId, done);
});

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID: '267652670480586',
        clientSecret: '4fec30192d36c911298395f07b31ed1b',
        callbackURL: "http://localhost:3001/oauth/facebook/callback"
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

const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: '6539a7feba83a4bde236',
    clientSecret: '1fe8ce7e23b704897cef6de7a19b7c2f5142532d',
    callbackURL: "http://localhost:3001/oauth/github/callback"
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

// Session options
const sessionOptions = {
  secret: "bon appetit",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}

var app = express();

app.use( session(sessionOptions) );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());


// routes
app.use('/oauth/', oauthFacebook);
app.use('/oauth/', oauthGoogle);
app.use('/oauth/', oauthLinkedin);
app.use('/oauth/', oauthGithub);

app.use('/cors/', cors);

// in production only : serves react app and assets
if (production) {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
