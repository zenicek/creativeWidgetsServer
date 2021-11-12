const { Schema } = require('mongoose');

const ElementSchema = new Schema({
  elementType: String,
  elementIndex: Number,
  elementLetter: String,
  elementDescription: String,
  value: Number,
  min: Number,
  max: Number,
  list: [{ optionName: Schema.Types.Mixed, onValue: Number, offValue: Number }],
});

const WidgetSchema = new Schema({
  name: String,
  formula: String,
  width: Number,
  lastLetter: String,
  elements: [ElementSchema],
});

module.exports = WidgetSchema;
