const mongoose = require('mongoose');
const db = require('mongoose');

const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
  name: String,
  email: String,
  favoriteFood: String,
  latitude: Number,
  longitude: Number,
  lastConnexion: Date,
  githubId: String,
  photo: String
});

const User = db.connection.model('user', UserSchema);

module.exports = User;