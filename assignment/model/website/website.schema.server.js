// var User = require('../user/user.model.server');

var mongoose = require('mongoose');

var WebsiteSchema = mongoose.Schema({
  // _user: User,
  name: String,
  developerId: String,
  description: String,
  pages: [],
  dateCreated: Date
}, {collection: 'website'});

module.exports = WebsiteSchema;
