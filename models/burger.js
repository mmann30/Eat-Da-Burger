var orm = require('../config/orm.js');

// burger object for passing burger specific arguments
// to the orm object functions to act on the burgers table of the burgers_db
var burger = {
    // calls the orm method in order to select all of the burgers
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });    
    },
    // calls the orm method in order to create a new burger
    create: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        });
    },
    // calls the orm method in order to update a burger
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export burger object for use in the controller (burgers_controller.js)
module.exports = burger;