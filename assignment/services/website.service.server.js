
module.exports = function (app) {
  app.get('/api/user/:userId/website', findWebsitesForUser);
  app.get('/api/user/:userId/website/:websiteId', findWebsiteById);
  app.post('/api/user/:userId/website', createWebsite);
  app.delete('/api/user/:userId/website/:websiteId', deleteWebsite);
  app.put('/api/user/:userId/website/:websiteId', updateWebsite);

  var websiteModel = require('../model/website/website.model.server');
  var WEBSITES = require("./website.mock.server");

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    var newWebsite = req.body;

    websiteModel
      .updateWebsite(websiteId, newWebsite)
      .then(function (status) {
        res.send(status);
      });
    // for (let x = 0; x < WEBSITES.length; x++) {
    //   if (WEBSITES[x]._id === websiteId ) {
    //     WEBSITES[x] = newWebsite;
    //     var websites = getWebsitesForUserId(userId);
    //     res.json(websites);
    //     return;
    //   }
    // }
  }

  function findWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
    // console.log(websites);
    // res.json(websites);
  }

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    website.developerId = userId;
    delete website._id;

    websiteModel
      .createWebsite(website)
      .then(function(website) { //good version
        res.json(website);
      }, function (err) {
        console.log(err); // bad version -- if failed
      });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    websiteModel
      .deleteWebsite(websiteId)
      .then(function () {
        res.json(null);
      });
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];

    websiteModel
      .findWebsiteById(websiteId)
      .then(function (website) {
        console.log('id:' + website);
        res.json(website);

      });
  }


};
