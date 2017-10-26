module.exports = function (app) {
  app.post('/api/api/:pageId/widget', createWidget);
  app.get('/api/api/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  var WIDGETS = require('./widget.mock.server');


  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;

  }
};
