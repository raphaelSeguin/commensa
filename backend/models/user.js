const mongoose = require('mongoose');
const db = require('mongoose');

const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
  name: String,
  email: String,
  photo: String,
  age: String,
  githubId: String
});

const User = db.connection.model('user', UserSchema);

module.exports = User;