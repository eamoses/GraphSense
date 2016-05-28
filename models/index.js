var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graphSense' ||
                  process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL );
module.exports = {
  User: require("./user"),
  Graph: require("./graph")
};
