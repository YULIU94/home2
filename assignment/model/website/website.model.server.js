
// import {Website} from "../../../src/app/models/website.model.client";

var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

module.exports = websiteModel;

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;


function createWebsite(website) {
  return websiteModel.create(website);
}

function findWebsitesForUser(userId) {
  return websiteModel
    .find({developerId: userId})
    .populate('developerId','username') // populate user here
    .exec();
}


