// var Website = require('../website/website.model.server');
var WebsiteSchema = require('../website/website.schema.server');
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [WebsiteSchema],
  dateCreated: Date
}, {collection: 'user'});

module.exports = UserSchema;
