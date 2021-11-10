const mongoose = require('mongoose');
const Widget = require('./widget.model');

const db = {};

db.mongoose = mongoose; // assign it to the db in can you have more schemas once added users and other types of widgets

db.Widget = db.mongoose.model('Widget', Widget);

module.exports = db;
