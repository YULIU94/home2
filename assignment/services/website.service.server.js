
module.exports = function (app) {
  app.get('/api/user/:userId/website', findWebsitesForUser);
  app.get('/api/user/:userId/website/:websiteId', findWebsiteById);
  app.post('/api/user/:userId/website', createWebsite);
  app.delete('/api/user/:userId/website/:websiteId', deleteWebsite);
  app.put('/api/user/:userId/website/:websiteId', updateWebsite);

  var WEBSITES = require("./website.mock.server");

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    var newWebsite = req.body;

    for (let x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x]._id === websiteId ) {
        WEBSITES[x] = newWebsite;
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
  }

  function findWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var websites = getWebsitesForUserId(userId);
    // console.log(websites);
    res.json(websites);
  }

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    website.developerId = userId;
    website._id = (new Date()).getTime().toString();
    WEBSITES.push(website);
    // console.log(website);
    res.json(getWebsitesForUserId(userId));
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    for (let x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x]._id === websiteId ) {
        WEBSITES.splice(x, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
  }

  function getWebsitesForUserId(userId) {
    const websites = [];
    for (let i=0; i<WEBSITES.length; i++){
      if (WEBSITES[i].developerId === userId){
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];

    res.json(getWebsiteById(websiteId));
  }


  // helper functions
  function getWebsiteById(websiteId) {
      for (let i=0; i<WEBSITES.length; i++){
        if (WEBSITES[i]._id === websiteId){
          return WEBSITES[i];
        }
      }
  }


};
