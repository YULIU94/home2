var mongoose = require('mongoose');
var PageSchema = require('../page/page.schema.server');
var WidgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("WidgetModel", WidgetSchema);

module.exports = widgetModel;

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetForPage = findAllWidgetForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.updateWidgetTextInput = updateWidgetTextInput;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

function createWidget(pageId, widget) {
  return widgetModel.create(widget);
}

function findAllWidgetForPage(pageId) {
  return widgetModel
    .find({pageId: pageId})
    .populate('_page') // populate website here
    .exec();
}

function findWidgetById(widgetId) {
  return widgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return widgetModel.update({_id: widgetId}, {$set: {size: size, text: widget.text, url: widget.src}});
}

function updateWidgetTextInput(widgetId, widget) {
  return widgetModel.update({_id: widgetId}, {$set: {name: widget.name, rows: widget.rows, text: widget.text,
                                                      placeholder: widget.placeholder, formatted: widget.formatted}});
}

function deleteWidget(widgetId) {
  return widgetModel.remove({_id: widgetId}, function (err) {
    if (err) return handleError(err);
  });
}

function reorderWidget() {

}
