// import {User} from "../../../src/app/models/user.model.client";

var mongoose = require('mongoose');

var WebsiteSchema = mongoose.Schema({
  // ???
  _user: String,
  name: String,
  description: String,
  pages: [],
  dateCreated: Date
}, {collection: 'website'});

module.exports = WebsiteSchema;
