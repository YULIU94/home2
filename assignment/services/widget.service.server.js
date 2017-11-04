module.exports = function (app) {
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  // initial : initial index of the widget before being reordered
  // final : final index of the widget after being reordered
  app.put('/api/page/:pageId/widget?initial=index1&final=index2', sortWidgets);

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../public/uploads' });
  app.post ("/api/upload", upload.single('myFile'), uploadImage);




  var WIDGETS = require('./widget.mock.server');


  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widget = getWidgetById(widgetId);
    widget.url = '/uploads/'+filename;

    var callbackUrl   = "/assignment/#/user/"+userId+"/website/"+websiteId;

    res.redirect(callbackUrl);
  }


  function sortWidgets() {

  }

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
