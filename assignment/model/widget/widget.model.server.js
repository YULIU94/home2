var mongoose = require('mongoose');
var PageSchema = require('../page/page.schema.server');
var WidgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("WidgetModel", WidgetSchema);

module.exports = widgetModel;

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetForPage = findAllWidgetForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.updateWidgetHeader = updateWidgetHeader;
widgetModel.updateWidgetTextInput = updateWidgetTextInput;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;
widgetModel.reorderWidgets =  reorderWidgets;
widgetModel.updatePosition = updatePosition;

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

function updateWidgetHeader(widgetId, widget) {
  return widgetModel.update({_id: widgetId}, {$set: {name: widget.name, text: widget.text, size: widget.size}});
}

function updateWidgetTextInput(widgetId, widget) {
  console.log(widgetId);
  console.log(widget);
  return widgetModel.update({_id: widgetId}, {$set: {name: widget.name, rows: widget.rows, text: widget.text,
                                                      placeholder: widget.placeholder, formatted: widget.formatted}});
}

function deleteWidget(widgetId) {
  return widgetModel.remove({_id: widgetId}, function (err) {
    if (err) return handleError(err);
  });
}

function updatePosition (pageId, position) {
  return widgetModel.find({_page:pageId}, function (err, widgets) {
    widgets.forEach (function (widget) {
      if(widget.position > position){
        widget.position--;
        widget.save();
      }
    })
  })
}

function reorderWidgets(pageId, startIndex, endIndex) {
  return widgetModel.find({_page:pageId}, function (err,widgets) {
    widgets.forEach (function (widget) {
      console.log(widget);
      if(startIndex < endIndex){
        if(widget.position === startIndex){
          widget.position = endIndex;
          widget.save();
        }else if (widget.position > startIndex
          && widget.position <= endIndex){
          widget.position --;
          widget.save();
        }else {
          if(widget.position === startIndex){
            widget.position = endIndex;
            widget.save();
          } else if(widget.position < startIndex
            && widget.position >= endIndex){
            widget.position ++;
            widget.save();
          }
        }
      }
    })
  })
}

function reorderWidget() {

}
