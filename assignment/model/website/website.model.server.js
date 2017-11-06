
// import {Website} from "../../../src/app/models/website.model.client";

var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("WebsiteModel", WebsiteSchema);
var userModel = require('../user/user.model.server');

module.exports = websiteModel;

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;
websiteModel.findWebsiteById = findWebsitesForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;


function createWebsite(website) {
  var newWebsite = null;
  return websiteModel
    .create(website)
    .then(function (website) {
      newWebsite = website;
      userModel.findUserById(newWebsite.developerId)
        .then(function (user) {
          user.websites.push(newWebsite);
          return user.save();
        });
    });
}

function findWebsitesForUser(userId) {
  return websiteModel
    .find({developerId: userId})
    .populate('developerId','username') // populate user here
    .exec();
}

function findWebsiteById(websiteId) {
  console.log('findbyid');
  return websiteModel.findById(websiteId);
}


function updateWebsite(websiteId, website) {
  return websiteModel.update({_id: websiteId}, {$set: {name: website.name, description:website.description}});
}

function deleteWebsite(websiteId) {
  return websiteModel.remove({_id: websiteId}, function (err) {
    if (err) return handleError(err);
  });
}
