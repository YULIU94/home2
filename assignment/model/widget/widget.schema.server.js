var mongoose = require('mongoose');

var WidgetScema = mongoose.Schema({
  _page: {type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'},
  pageId: String,
  type: String,
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: Date
}, {collection: 'widget'});

module.exports = WidgetScema;
