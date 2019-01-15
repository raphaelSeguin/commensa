const mongoose = require('mongoose');
const User = require('./models/user');
const dbURL = 'mongodb://raph:Raph1979@ds018848.mlab.com:18848/capstone';

mongoose.connect(dbURL, { useNewUrlParser: true }).catch( err => console.log(err.message));
const db = mongoose.connection;
db.on('error', err => console.log('db connection error :') );
db.once('open', function() {
    console.log('connected successfully to db');
});


