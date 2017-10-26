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

    widget._id = (new Date()).getTime().toString();
    WIDGETS.push(widget);

    res.json(findWidgetsByPageId(pageId));
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    res.json(findWidgetsByPageId(pageId));
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    res.json(findWidgetByWidgetId(widgetId));
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    for (let i=0; i<WIDGETS.length; i++){
      if (WIDGETS[i]._id === widgetId){
        WIDGETS[i] = widget;
        res.json(WIDGETS);
        return;
      }
    }
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    for (let i=0; i<WIDGETS.length; i++){
      if (WIDGETS[i]._id === widgetId){
        WIDGETS.splice(i, 1);
        res.json(WIDGETS);
        return;
      }
    }
  }


  // helper functions
  function findWidgetsByPageId(pageId) {
    const widgets = [];
    for (let i=0; i<WIDGETS.length; i++){
      if (WIDGETS[i].pageId === pageId){
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }

  function findWidgetByWidgetId(widgetId) {
    for (let i=0; i<WIDGETS.length; i++){
      if (WIDGETS[i]._id === widgetId){
        return WIDGETS[i];
      }
    }
  }
};
