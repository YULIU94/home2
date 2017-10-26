module.exports = function (app) {
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  const PAGES = require("./website.mock.server");

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page._id = (new Date()).getTime().toString();
    PAGES.push(page);
    res.json(findPagesByWebsiteId(websiteId));
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    res.json(findPagesByWebsiteId(websiteId));
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    res.json(findPageByPageId(pageId));
  }

  function updatePage(req, res) {
    const pageId = req.params['pageId'];
    const page = req.body;
    for (let i=0; i<PAGES.length; i++){
      if (PAGES[i]._id === pageId){
        PAGES[i] = page;
        res.json(PAGES);
        return;
      }
    }
  }

  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    for (let i=0; i<PAGES.length; i++){
      if (PAGES[i]._id === pageId){
        PAGES.splice(i, 1);
        res.json(PAGES);
        return;
      }
    }
  }


  // helper functions
  function findPagesByWebsiteId(websiteId) {
    const pages = [];
    for (let i=0; i<PAGES.length; i++){
      if (PAGES[i].websiteId === websiteId){
        pages.push(PAGES[i]);
      }
    }
    return pages;
  }

  function findPageByPageId(pageId) {
    for (let i=0; i<PAGES.length; i++){
      if (PAGES[i]._id === pageId){
        return PAGES[i];
      }
    }
  }

};
