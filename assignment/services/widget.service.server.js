module.exports = function (app) {
  app.get('/api/widget', findAllWidgets);
  var WIDGETS = require('./widget.mock.server');
  function findAllWidgets(req, res) {
    res.json(WIDGETS);
  }
};
