module.exports = function (app) {
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  var pageModel = require('../model/page/page.model.server');
  const PAGES = require("./website.mock.server");

  function createPage(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;
    page.websiteId = websiteId;
    pageModel
      .createPage(page)
      .then(function (page) {
        res.json(page);
      }, function(err) {
        console.log(err);
      });
    // page._id = (new Date()).getTime().toString();
    // PAGES.push(page);
    // res.json(findPagesByWebsiteId(websiteId));
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      }, function(err) {
        console.log(err);
      })
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    pageModel
      .findPageById(pageId)
      .then(function (page) {
        res.json(page);
      });
  }

  function updatePage(req, res) {
    const pageId = req.params['pageId'];
    const page = req.body;

    pageModel
      .updatePage(pageId, page)
      .then(function (status) {
        res.send(status);
      });
  }

  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    pageModel
      .deletePage(pageId)
      .then(function () {
        res.json(null);
      });
  }


  // helper functions
  // function findPagesByWebsiteId(websiteId) {
  //   const pages = [];
  //   for (let i=0; i<PAGES.length; i++){
  //     if (PAGES[i].websiteId === websiteId){
  //       pages.push(PAGES[i]);
  //     }
  //   }
  //   return pages;
  // }
  //
  // function findPageByPageId(pageId) {
  //   for (let i=0; i<PAGES.length; i++){
  //     if (PAGES[i]._id === pageId){
  //       return PAGES[i];
  //     }
  //   }
  // }

};
