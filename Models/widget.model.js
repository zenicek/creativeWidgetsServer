const { Schema } = require('mongoose');

const ElementSchema = new Schema({
  elementType: String,
  elementIndex: Number,
  elementLetter: String,
  elementDescription: String,
  value: Number,
  min: Number,
  max: Number,
  step: Number,
  list: [{ optionName: Schema.Types.Mixed, onValue: Number, offValue: Number }],
});

const WidgetSchema = new Schema({
  name: String,
  formula: String,
  width: Number,
  lastLetter: String,
  resultDesc: String,
  resultValueDesc: String,
  result: [{ description: String, valueDesc: Number }],
  elements: [ElementSchema],
});

module.exports = WidgetSchema;
