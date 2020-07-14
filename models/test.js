// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var test = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = test;
