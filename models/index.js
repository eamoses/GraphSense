var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/microblog-app');

module.exports.Graph = require("./graph");
module.exports.User = require("./user");
