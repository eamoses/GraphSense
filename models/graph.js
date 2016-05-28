var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var graphSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String
});

var Graph = mongoose.model('Graph', graphSchema);
module.exports = Graph;
