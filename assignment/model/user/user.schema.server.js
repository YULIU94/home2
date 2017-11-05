
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  passwoord: String,
  firstname: String,
  lastName: String,
  email: String,
  phone: String,
  //???
  websites: [],
  dateCreated: Date
}, {collection: 'user'});

module.exports = UserSchema;
