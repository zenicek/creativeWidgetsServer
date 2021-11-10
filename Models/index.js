const mongoose = require('mongoose');
const widget = require('./widget.model');

const db = {};

db.mongoose = mongoose; // assign it to the db in can you have more schemas

db.Widget = db.mongoose.model('Widget', widget);

module.exports = db;
