
// import {Website} from "../../../src/app/models/website.model.client";

var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

module.exports = WebsiteModel;

WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findWebsitesForUser = findWebsitesForUser;


function createWebsite(website) {
  return WebsiteModel.create(website);
}

function findWebsitesForUser(userId) {
  return WebsiteModel.find({developerId: userId});
}


