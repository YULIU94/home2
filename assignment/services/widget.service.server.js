module.exports = function (app) {
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.put('/api/widget/:widgetId/textinput', updateWidgetTextInput);
  app.delete('/api/widget/:widgetId', deleteWidget);

  // initial : initial index of the widget before being reordered
  // final : final index of the widget after being reordered
  app.put('/api/page/:pageId/widget?initial=index1&final=index2', sortWidgets);

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../public/uploads' });
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  var fs = require('fs');
  app.get('/api/uploads', getFileUploads);



  var widgetModel = require('../model/widget/widget.model.server');



  function getFileUploads(req, res) {
    console.log('getfiles');
    fs.readdir(__dirname+'/../../src/public/uploads',
      function (err, files) {
        res.send(files);
      });
  }

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

    console.log('uploadyes');
    widget = findWidgetByWidgetId(widgetId);
    widget.url = '/uploads/'+filename;
    // var image = {
    //   name: filename,
    //   widgetType: '2',
    //   pageId: pageId,
    //   size: size,
    //   width: width,
    //   url: 'assets/uploads/' + filename
    // };
    //
    // widgetModel.createWidget(widgetId, image).then(function(widget){
    //   res.json(widget);});

    var callbackUrl   = "http://localhost:4200/profile/"+userId+"/website/"+websiteId
                        + '/page/' + pageId + '/widget';
    console.log('redirect');
    res.redirect(callbackUrl);
  }


  function sortWidgets() {

  }

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;
    widget.pageId = pageId;
    delete widget._id;
    console.log(widget);
    widgetModel
      .createWidget(pageId, widget)
      .then(function (widget) {
        console.log(widget);
        res.json(widget);
      }, function(err) {
        console.log(err);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    widgetModel
      .findAllWidgetForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    widgetModel
      .findById(widgetId)
      .then(function (widget) {
        res.json(widget);
      });
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (status) {
        res.send(status);
      });
  }

  function updateWidgetTextInput(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    widgetModel
      .updateWidgetTextInput(widgetId, widget)
      .then(function (status) {
        res.send(status);
      });
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    widgetModel
      .deleteWidget(widgetId)
      .then(function () {
        res.json(null);
      });
  }

};
