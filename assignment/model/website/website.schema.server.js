// var User = require('../user/user.model.server');

var mongoose = require('mongoose');

var WebsiteSchema = mongoose.Schema({
  // _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  // populate user here
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  pages: [],
  dateCreated: Date
}, {collection: 'website'});

module.exports = WebsiteSchema;
