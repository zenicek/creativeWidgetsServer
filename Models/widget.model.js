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
  resultDescription: String,
  resultValueDesc: String,
  result: [{ formula: String, description: String, valueDesc: String }], //this will be used later when added new feature to have more results
  elements: [ElementSchema],
});

module.exports = WidgetSchema;
