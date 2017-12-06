var mongoose = require('mongoose');
var PageSchema = require('../page/page.schema.server');
var WidgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("WidgetModel", WidgetSchema);
var pageModel = mongoose.model("PageModel", PageSchema);

module.exports = widgetModel;

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetForPage = findAllWidgetForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.updateWidgetHeader = updateWidgetHeader;
widgetModel.updateWidgetImage = updateWidgetImage;
widgetModel.updateWidgetTextInput = updateWidgetTextInput;
widgetModel.deleteWidget = deleteWidget;
// widgetModel.reorderWidget = reorderWidget;
widgetModel.reorderWidgets =  reorderWidgets;
widgetModel.updatePosition = updatePosition;

function createWidget(pageId, widget) {
  var widget_temp = widget;
  var pageId = widget_temp._page;
  var amt;
  widgetModel
    .find({_page: pageId})
    .then(function (widgets){
      amt = widgets.length;
      widget_temp.position = amt;
    });

  return widgetModel
    .create(widget)
    .then(function(widget){
      var newWidget = widget;
      newWidget.position = amt;
      newWidget.save();
      return pageModel
        .findPageById(newWidget._page);
        // .then(function(page){
        //   page.widgets.push(newWidget._id);
        //   //return the saved website
        //   return newWidget;
        // });
    });
}

function findAllWidgetForPage(pageId) {
  return widgetModel
    .find({pageId: pageId})
    .sort({position: 1});
    // .find({pageId: pageId});
    // .populate('_page') // populate website here
    // .exec();
}

function findWidgetById(widgetId) {
  return widgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return widgetModel.update({_id: widgetId}, {$set: {size: size, text: widget.text, url: widget.url}});
}

function updateWidgetImage(widgetId, widget) {

  return widgetModel.update({_id: widgetId}, {$set: {name: widget.name, text: widget.text, url: widget.url}});
}

function updateWidgetHeader(widgetId, widget) {
  return widgetModel.update({_id: widgetId}, {$set: {name: widget.name, text: widget.text, size: widget.size}});
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

function updatePosition (pageId, position) {
  return widgetModel.find({pageId:pageId}, function (err, widgets) {
    widgets.forEach (function (widget) {
      if(widget.position > position){
        widget.position--;
        widget.save();
      }
    })
  })
}

function reorderWidgets(pageId, startIndex, endIndex) {
  console.log('start');
  return widgetModel.find({pageId:pageId}, function (err,widgets) {
      console.log(widgets);
      widgets.forEach (function (widget) {
        console.log(widget.position);
        // console.log('reorder');

        if(startIndex < endIndex){
          if(widget.position === startIndex){
            widget.position = endIndex;
            return widget.save();
          }else if (widget.position > startIndex
            && widget.position <= endIndex){
            widget.position --;
            return widget.save();
          }else {
            if(widget.position === startIndex){
              widget.position = endIndex;
              return widget.save();
            } else if(widget.position < startIndex
              && widget.position >= endIndex){
              widget.position ++;
              return widget.save();
            }
          }
        }
        console.log(widget.position);
    });
    console.log(widgets);
  })
}

// function reorderWidget() {
//
// }
