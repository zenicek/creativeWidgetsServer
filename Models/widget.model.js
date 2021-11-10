const { Schema } = require('mongoose');

const ElementSchema = new Schema({
  elementType: String,
  elementIndex: Number,
  elementLetter: String,
  value: Number,
  min: Number,
  max: Number,
  list: [Schema.Types.Mixed],
});

const WidgetSchema = new Schema({
  name: String,
  formula: String,
  elements: [ElementSchema],
});

module.exports = WidgetSchema;
