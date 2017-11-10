// var User = require('../user/user.model.server');
var PageSchema = require('../page/page.schema.server');
var mongoose = require('mongoose');

var WebsiteSchema = mongoose.Schema({
  // _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  // populate user here
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
  pages: [PageSchema],
  dateCreated: Date
}, {collection: 'website'});

module.exports = WebsiteSchema;
