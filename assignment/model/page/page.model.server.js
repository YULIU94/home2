var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var pageModel = mongoose.model("PageModel", PageSchema);
var userModel = require('../user/user.model.server');
var websiteModel = require('../website/website.model.server');

module.exports = pageModel;

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

function createPage(page) {
  var newPage = null;
  delete page._id;
  return pageModel
    .create(page)
    // .then(function (page) {
    //   console.log('2:'+page);
    //   newPage = page;
    //   websiteModel.findWebsiteById(newPage.websiteId)
    //     .then(function (website) {
    //       website.pages.push(newPage);
    //       return website.save();
    //     });
    // });
}

function findAllPagesForWebsite(websiteId) {
  return pageModel
    .find({websiteId: websiteId})
    .populate('websiteId') // populate website here
    .exec();
}

function findPageById(pageId) {
  return pageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return pageModel.update({_id: pageId}, {$set: {name: page.name, description:page.description}});
}

function deletePage(pageId) {
  return pageModel.remove({_id: pageId}, function (err) {
    if (err) return handleError(err);
  });
}
