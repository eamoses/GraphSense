var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GraphSchema = new Schema({
  title: String,
  description: String
});

var Graph = mongoose.model('Graph', GraphSchema);

module.exports = Graph;
